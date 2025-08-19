import { createContext, useState } from "react";
import { Token } from "../types/shared/Token";
import { AuthContextType } from "../types/api/Auth";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token , setToken] = useState<Token | null>(null);
  
  return (
    <AuthContext.Provider
      value={{token, setToken}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;