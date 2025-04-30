import { request } from "@/entities/auth";

import { IOrder } from "../types";

type TypeData = {
	items: {
		quantity: number;
		price: number;
		productId: string;
	}[];
};

export const OrderService = {
	async getAll() {
		return request<IOrder[]>({
			url: "/orders",
			method: "GET"
		});
	},

	async getByUserId() {
		return request<IOrder[]>({
			url: "/orders/by-user",
			method: "GET"
		});
	},

	async place(data: TypeData) {
		return request<{ clientSecret: string }>({
			url: "/orders",
			method: "POST",
			data
		});
	}
};
