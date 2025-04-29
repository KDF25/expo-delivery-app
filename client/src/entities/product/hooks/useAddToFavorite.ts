import { useMutation, useQueryClient } from "@tanstack/react-query";

import { UserService } from "@/entities/user";

export const useAddToFavorite = (productId: string) => {
	const queryClient = useQueryClient();

	const { mutate } = useMutation({
		mutationKey: ["toggle favorite"],
		mutationFn: () => UserService.toggleFavorite(productId),

		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ["get profile"] });
		}
	});

	return { mutate };
};
