
interface TokenApi {
    user?: string;
    token?: string;
};

export type Token = Partial<TokenApi>;