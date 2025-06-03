import { JwtPayload } from "jwt-decode";

interface JwtTokenApi extends JwtPayload {
    name: string
};

export type JwtToken = Partial<JwtTokenApi>;