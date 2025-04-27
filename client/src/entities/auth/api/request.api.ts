import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import Toast from "react-native-toast-message";

import { errorCatch } from "@/shared/utils";

import instance from "./interceptors.api";

export const request = async <T>(config: AxiosRequestConfig) => {
	const onSuccess = (response: AxiosResponse<T>) => {
		return response.data;
	};

	const onError = (error: AxiosError<T>) => {
		Toast.show({
			type: "error",
			text1: "Request Error",
			text2: errorCatch(error),
			position: "top",
			visibilityTime: 3000,
			autoHide: true,
			topOffset: 30
		});
		return Promise.reject(error);
	};

	return instance(config).then(onSuccess).catch(onError);
};
