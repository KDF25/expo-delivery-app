import { request } from "@/entities/auth";

import { IProfileFormData, IUser } from "../types";

export const UserService = {
	async getProfile() {
		return request<IUser>({
			url: "/users/profile",
			method: "GET"
		});
	},

	async updateProfile(profile: IProfileFormData) {
		return request<IUser>({
			url: "/users/profile",
			method: "PATCH",
			data: profile
		});
	},

	async toggleFavorite(productId: string) {
		return request<IUser>({
			url: `/users/profile/favorites/${productId}`,
			method: "PATCH"
		});
	}
};
