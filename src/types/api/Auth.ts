import { UserLogin } from "../shared/UserLogin";

interface AuthContextTypeAPI {
    signin: (userLogin : UserLogin) => Promise<unknown | Error>;
    signup: (userLogin: UserLogin) => Promise<unknown | Error>;
    signout: () => void;
}

export type AuthContextType = Partial<AuthContextTypeAPI>;