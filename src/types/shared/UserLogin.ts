interface UserLoginApi {
    email: string,
    password: string
};

export type UserLogin = Partial<UserLoginApi>;