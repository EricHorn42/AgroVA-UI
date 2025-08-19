import { AuthProvider } from "./AuthProvider"
import { FarmerProvider } from "./farmerContex";
import { HarvestProvider } from "./harvestContext";
import { ThemeProvider } from "./themeContext";



export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <>
            <ThemeProvider>
                <AuthProvider>
                    <FarmerProvider>
                        <HarvestProvider>
                            {children}
                        </HarvestProvider>
                    </FarmerProvider>
                </AuthProvider >
            </ThemeProvider>
        </>
    );
};