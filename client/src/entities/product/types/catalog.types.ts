import { IProduct } from "./product.types";

export interface ICatalog {
	title?: string;
	products: IProduct[];
}
