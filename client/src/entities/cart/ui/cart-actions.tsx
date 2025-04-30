import { AntDesign } from "@expo/vector-icons";
import { FC } from "react";
import { Pressable, Text, View } from "react-native";

import { useActions } from "@/entities/store/hooks/useActions";

import { useCart } from "../hooks";
import { ENUM_CHANGE_QUANTITY, ICartItem } from "../types";

interface ICartActions {
	item: ICartItem;
}

export const CartActions: FC<ICartActions> = ({ item }) => {
	const { changeQuantity } = useActions();

	const { items } = useCart();

	const quantity = items.find(
		(cartItem) => cartItem.id === item.id
	)?.quantity;

	return (
		<View className="flex-row items-center mt-4 gap-x-4">
			<Pressable
				onPress={() =>
					changeQuantity({
						id: item.id,
						type: ENUM_CHANGE_QUANTITY.MINUS
					})
				}
				disabled={quantity === 1}
			>
				<AntDesign name="minus" size={18} />
			</Pressable>
			<Text>{quantity}</Text>
			<Pressable
				onPress={() =>
					changeQuantity({
						id: item.id,
						type: ENUM_CHANGE_QUANTITY.PLUS
					})
				}
			>
				<AntDesign name="plus" size={18} />
			</Pressable>
		</View>
	);
};
