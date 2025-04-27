import { IUser } from "@/entities/user";

export interface IAuthFormData extends Pick<IUser, "email" | "password"> {}

export interface ITokens {
	accessToken: string;
	refreshToken: string;
}

export interface IAuthResponse extends ITokens {
	user: IUser;
}
