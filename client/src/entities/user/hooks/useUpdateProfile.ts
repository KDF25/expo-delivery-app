import { useMutation, useQueryClient } from "@tanstack/react-query";

import { ENUM_QUERY_TAGS } from "@/shared/config";

import { UserService } from "../api";
import { IProfileFormData } from "../types";

export const useUpdateProfile = () => {
	const queryClient = useQueryClient();

	const { mutate } = useMutation({
		mutationKey: [ENUM_QUERY_TAGS.UPDATE_PROFILE],
		mutationFn: (profile: IProfileFormData) =>
			UserService.updateProfile(profile),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: [ENUM_QUERY_TAGS.GET_PROFILE]
			});
		}
	});

	return { mutate };
};
