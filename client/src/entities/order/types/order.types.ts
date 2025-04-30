import { ICartItem } from "@/entities/cart";
import { IUser } from "@/entities/user";

export interface IOrder {
    id: string;
    createdAt: string;
    items: ICartItem[];
    user: IUser;
    total: number;
}