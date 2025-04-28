import { request } from "@/entities/auth";

import { ICategory } from "../types";

export const CategoryService = {
	async getAll() {
		return request<ICategory[]>({
			url: "/categories",
			method: "GET"
		});
	},

	async getCategoryBySlug(slug: string) {
		return request<ICategory[]>({
			url: `/categories/by-slug/${slug}`,
			method: "GET"
		});
	}
};
