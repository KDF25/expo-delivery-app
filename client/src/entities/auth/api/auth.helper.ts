import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { deleteItemAsync, getItemAsync, setItemAsync } from "expo-secure-store";

import { SERVER_URL } from "@/shared/config";

import {
	ENUM_ASYNC_STORAGE,
	ENUM_SECURE_STORE,
	IAuthResponse,
	ITokens
} from "../types";

export const getAccessToken = async () => {
	const accessToken = await getItemAsync(ENUM_SECURE_STORE.ACCESS_TOKEN);
	return accessToken || null;
};

export const saveTokensStorage = async (data: ITokens) => {
	await setItemAsync(ENUM_SECURE_STORE.ACCESS_TOKEN, data.accessToken);
	await setItemAsync(ENUM_SECURE_STORE.REFRESH_TOKEN, data.refreshToken);
};

export const deleteTokensStorage = async () => {
	await deleteItemAsync(ENUM_SECURE_STORE.ACCESS_TOKEN);
	await deleteItemAsync(ENUM_SECURE_STORE.REFRESH_TOKEN);
};

export const getUserFromStorage = async () => {
	try {
		return JSON.parse(
			(await AsyncStorage.getItem(ENUM_ASYNC_STORAGE.USER)) || "{}"
		);
	} catch (error) {
		return null;
	}
};

export const saveUserToStorage = async (data: IAuthResponse) => {
	await saveTokensStorage(data);
	try {
		await AsyncStorage.setItem(
			ENUM_ASYNC_STORAGE.USER,
			JSON.stringify(data.user)
		);
	} catch (error) {}
};

export const getNewTokens = async () => {
	try {
		const refreshToken = await getItemAsync(
			ENUM_SECURE_STORE.REFRESH_TOKEN
		);
		const response = await axios.post<string, { data: IAuthResponse }>(
			SERVER_URL + "/auth/login/access-token",
			{ refreshToken },
			{
				headers: {
					"Content-Type": "application/json"
				}
			}
		);
		if (response.data.accessToken) await saveTokensStorage(response.data);

		return response;
	} catch (e) {}
};
