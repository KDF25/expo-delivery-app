import { FC } from "react";
import { Image, Pressable, Text, View } from "react-native";

import { ENUM_APP_ROUTES } from "@/shared/config";
import { useTypedNavigation } from "@/shared/hooks";

import { IProduct, ProductInfo } from "@/entities/product";

interface IProductCardProps {
	card: IProduct;
}

export const ProductCard: FC<IProductCardProps> = ({ card }) => {
	const { navigate } = useTypedNavigation();

	return (
		<View className="rounded-lg flex-col mb-3.5">
			<Pressable
				onPress={() =>
					navigate(ENUM_APP_ROUTES.PROFILE, { slug: card?.slug })
				}
				className="relative flex items-center justify-center p-5 overflow-hidden bg-gray-100 rounded-xl"
			>
				<Image source={{ uri: card?.image }} width={130} height={130} />
			</Pressable>
			<ProductInfo card={card} />
		</View>
	);
};
