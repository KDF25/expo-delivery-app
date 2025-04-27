import AsyncStorage from "@react-native-async-storage/async-storage";

import { ENUM_ASYNC_STORAGE, ENUM_AUTH_TYPE, IAuthResponse } from "../types";

import { deleteTokensStorage, saveUserToStorage } from "./auth.helper";
import { request } from "./request.api";

export const AuthService = {
	async main(type: ENUM_AUTH_TYPE, email: string, password: string) {
		const response = await request<IAuthResponse>({
			url:
				type === ENUM_AUTH_TYPE.LOGIN
					? "/auth/login"
					: "/auth/register",
			method: "POST",
			data: {
				email,
				password
			}
		});

		if (response.accessToken) {
			await saveUserToStorage(response);
		}

		return response;
	},

	async logout() {
		await deleteTokensStorage();
		await AsyncStorage.removeItem(ENUM_ASYNC_STORAGE.USER);
	}
};
