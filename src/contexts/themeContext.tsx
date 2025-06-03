import { createContext, useEffect, useState } from "react";
import { ThemeProvider as StyledProvider } from 'styled-components';
import { ThemeContextType, Theme, ThemeType } from "../types/context/themeContext";
import { darkTheme, lightTheme } from "../styles/themes";
import { useCookies } from "react-cookie";

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export default ThemeContext;

const THEME_KEY = 'user-theme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [cookies] = useCookies(['user', 'token']);
    const hasToken = cookies.token != null && cookies.token.length > 0;

    const getInitialTheme = (): ThemeType => {
        const stored = localStorage.getItem(THEME_KEY);
        if (stored === 'light' || stored === 'dark') return stored;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const [theme, setTheme] = useState<ThemeType>(getInitialTheme());

    const toggleTheme = () => {
        const next = theme === 'light' ? 'dark' : 'light';
        setTheme(next);
        localStorage.setItem(THEME_KEY, next);
    };

    useEffect(() => {
        const media = window.matchMedia('(prefers-color-scheme: dark)');
        const changeHandler = () => {
            if (!localStorage.getItem(THEME_KEY)) {
                setTheme(media.matches ? 'dark' : 'light');
            }
        };
        media.addEventListener('change', changeHandler);
        return () => media.removeEventListener('change', changeHandler);
    }, []);

    const selectedTheme: Theme = theme === 'light' ? lightTheme : darkTheme;

    const commputedTheme: Theme = {
        ...selectedTheme,
        layout: {
            width: {
                menuClose: hasToken ? selectedTheme.layout.width.menuClose : 0,
                menuOpen: hasToken ? selectedTheme.layout.width.menuOpen : 0,
                container: selectedTheme.layout.width.container
            },
            height: {
                container: selectedTheme.layout.height.container,
                header: selectedTheme.layout.height.header,
                footer: selectedTheme.layout.height.footer,
                button: selectedTheme.layout.height.button,
                input: selectedTheme.layout.height.input
            }
        }

    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <StyledProvider theme={commputedTheme}>
                {children}
            </StyledProvider>
        </ThemeContext.Provider>
    );
};