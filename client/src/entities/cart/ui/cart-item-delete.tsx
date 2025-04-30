import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { Pressable, Text, View } from "react-native";

import { useActions } from "@/entities/store/hooks/useActions";

import { ICartItem } from "../types";

interface ICartItemDeleteProps {
	item: ICartItem;
}

export const CartItemDelete: FC<ICartItemDeleteProps> = ({ item }) => {
	const { removeFromCart } = useActions();
	return (
		<View className="items-end self-center flex-1 w-full ">
			<Pressable onPress={() => removeFromCart({ id: item.id })}>
				<Ionicons name="trash" size={26} color="gray" />
			</Pressable>
		</View>
	);
};
