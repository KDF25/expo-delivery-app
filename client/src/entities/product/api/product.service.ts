import { request } from "@/entities/auth";

import { IProduct } from "../types";

export const ProductService = {
	async getAll(searchTerm?: string) {
		return request<IProduct[]>({
			url: "/products",
			method: "GET",
			params: searchTerm
				? {
						searchTerm
					}
				: {}
		});
	},

	async getProductBySlug(slug: string) {
		return request<IProduct>({
			url: `/products/by-slug/${slug}`,
			method: "GET"
		});
	},

	async getProductByCategorySlug(categorySlug: string) {
		return request<IProduct>({
			url: `/products/by-category/${categorySlug}`,
			method: "GET",
			data: { categorySlug }
		});
	}
};
