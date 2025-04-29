import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FC } from "react";

import { ProductButton, useAddToFavorite } from "@/entities/product";
import { useProfile } from "@/entities/user";

interface IAddToFavorite {
	productId: string;
}

export const AddToFavorite: FC<IAddToFavorite> = ({ productId }) => {
	const { profile } = useProfile();

	const { mutate } = useAddToFavorite(productId);

	if (!profile) return null;

	const isExists = profile.favorites.some(
		(favorite) => favorite.id === productId
	);

	return (
		<ProductButton onPress={() => mutate()}>
			<MaterialCommunityIcons
				name={isExists ? "heart" : "heart-outline"}
				size={22}
				color={isExists ? "#DC3F41" : "#555"}
			/>
		</ProductButton>
	);
};
