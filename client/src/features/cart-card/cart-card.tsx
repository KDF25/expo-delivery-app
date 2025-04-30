import { FC } from "react";
import { Image, Pressable, Text, View } from "react-native";

import { useTypedNavigation } from "@/shared/hooks";
import { convertPrice } from "@/shared/utils";

import { CartActions, CartItemDelete, ICartItem } from "@/entities/cart";

interface ICartItemProps {
	item: ICartItem;
}

export const CartItem: FC<ICartItemProps> = ({ item }) => {
	const { navigate } = useTypedNavigation();

	return (
		<View className="flex-row items-center gap-4">
			<Pressable
				onPress={() => navigate("Product", { slug: item.product.slug })}
				className="items-center px-3 py-3 overflow-hidden bg-gray-100 rounded-xl w-28"
			>
				<Image
					source={{ uri: item.product.image }}
					width={80}
					height={80}
				/>
			</Pressable>

			<View>
				<Text className="mb-1 text-xl font-semibold">
					{item.product.name}
				</Text>
				<Text>{convertPrice(item.price)}</Text>
				<CartActions item={item} />
			</View>
			<CartItemDelete item={item} />
		</View>
	);
};
