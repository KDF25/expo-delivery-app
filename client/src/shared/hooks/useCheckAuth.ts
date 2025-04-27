import { getItemAsync } from "expo-secure-store";
import { useEffect } from "react";

import {
	AuthService,
	ENUM_SECURE_STORE,
	getAccessToken,
	getNewTokens
} from "@/entities/auth";

import { errorCatch } from "../api";

import { useAuth } from "./useAuth";

export const useCheckAuth = (routeName?: string) => {
	const { user, setUser } = useAuth();

	useEffect(() => {
		const checkAccessToken = async () => {
			const accessToken = await getAccessToken();
			if (accessToken) {
				try {
					await getNewTokens();
				} catch (e) {
					if (errorCatch(e) === "jwt expired") {
						await AuthService.logout();
						setUser(null);
					}
				}
			}
		};

		let ignore = checkAccessToken();
	}, []);

	useEffect(() => {
		const checkAccessToken = async () => {
			const refreshToken = await getItemAsync(
				ENUM_SECURE_STORE.REFRESH_TOKEN
			);

			if (!refreshToken && user) {
				await AuthService.logout();
				setUser(null);
			}
		};

		let ignore = checkAccessToken();
	}, [routeName]);
};
