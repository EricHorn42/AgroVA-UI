import { Token } from "../shared/Token";

interface AuthContextTypeAPI {
    // signin: (userLogin : UserLogin) => Promise<unknown | Error>;
    // signup: (userLogin: UserLogin) => Promise<unknown | Error>;
    // signout: () => void;
    token: Token | null;
    setToken: React.Dispatch<React.SetStateAction<Token | null>>;
}

export type AuthContextType = Partial<AuthContextTypeAPI>;