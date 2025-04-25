import { IUser } from "@/entities/user";

export interface IAuthFormData extends Pick<IUser, "email" | "password"> {}
