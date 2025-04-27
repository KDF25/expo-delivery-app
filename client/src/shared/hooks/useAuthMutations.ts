import { useMutation } from "@tanstack/react-query";
import { useMemo } from "react";
import { UseFormReset } from "react-hook-form";

import { AuthService, ENUM_AUTH_TYPE, IAuthFormData } from "@/entities/auth";

import { useAuth } from "./useAuth";

export const useAuthMutations = (reset: UseFormReset<IAuthFormData>) => {
	const { setUser } = useAuth();

	const { mutate: loginSync, isPending: isLoginLoading } = useMutation({
		mutationKey: [ENUM_AUTH_TYPE.LOGIN],
		mutationFn: ({ email, password }: IAuthFormData) =>
			AuthService.main(ENUM_AUTH_TYPE.LOGIN, email, password),
		onSuccess(data) {
			reset();
			setUser(data.user);
		}
	});

	const { mutate: registerSync, isPending: isRegisterLoading } = useMutation({
		mutationKey: [ENUM_AUTH_TYPE.REGISTRATION],
		mutationFn: ({ email, password }: IAuthFormData) =>
			AuthService.main(ENUM_AUTH_TYPE.REGISTRATION, email, password),

		onSuccess(data) {
			reset();
			setUser(data.user);
		}
	});

	return useMemo(
		() => ({
			loginSync,
			registerSync,
			isLoading: isLoginLoading || isRegisterLoading
		}),
		[isLoginLoading, isRegisterLoading]
	);
};
