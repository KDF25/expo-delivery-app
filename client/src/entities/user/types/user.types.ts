import { IProduct } from "@/entities/product";

export interface IUser {
	id: string;
	email: string;
	phone: string;
	password: string;
	name: string;
	avatarPath: string;
	favorites: IProduct[];
}

export type IProfileFormData = Omit<IUser, "favorites" | "password" | "id">;
