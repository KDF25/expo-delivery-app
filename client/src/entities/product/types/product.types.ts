import { ICategory } from "@/entities/category";

export interface IProduct {
	id: string;
	name: string;
	slug: string;
	description: string;
	image: string;
	price: number;
	createdAt: string;
	category: ICategory;
}
