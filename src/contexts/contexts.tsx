import { AuthProvider } from "./auth"
import { EntityProvider } from "./entityContext";
import { FarmerProvider } from "./farmerContext"
import { HarvestProvider } from "./harverstContext";
import { ThemeProvider } from "./themeContext";



export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <>
            <ThemeProvider>
                <AuthProvider>
                    <EntityProvider>
                        <FarmerProvider>
                            <HarvestProvider>
                                {children}
                            </HarvestProvider>
                        </FarmerProvider>
                    </EntityProvider>
                </AuthProvider >
            </ThemeProvider>
        </>
    );
};