import { request } from "@/entities/auth";

import { IUser } from "../types";

export const UserService = {
	async getProfile() {
		return request<IUser>({
			url: "/users/profile",
			method: "GET"
		});
	},

	async toggleFavorite(productId: string) {
		return request<IUser>({
			url: `/users/profile/favorites/${productId}`,
			method: "PATCH"
		});
	}
};
