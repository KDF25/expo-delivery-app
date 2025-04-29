import { useMutation, useQueryClient } from "@tanstack/react-query";

import { ENUM_QUERY_TAGS } from "@/shared/config";

import { UserService } from "@/entities/user";

export const useAddToFavorite = (productId: string) => {
	const queryClient = useQueryClient();

	const { mutate } = useMutation({
		mutationKey: [ENUM_QUERY_TAGS.TOGGLE_FAVORITE],
		mutationFn: () => UserService.toggleFavorite(productId),

		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: [ENUM_QUERY_TAGS.GET_PROFILE]
			});
		}
	});

	return { mutate };
};
