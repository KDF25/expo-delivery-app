import { FC } from "react";
import { Text, View } from "react-native";

import { convertPrice } from "@/shared/utils";

import { IProduct } from "../types";

interface IProductInfo {
	card: IProduct;
}

export const ProductInfo: FC<IProductInfo> = ({ card }) => {
	return (
		<View className="my-3">
			<Text className="text-base font-semibold">{card?.name}</Text>
			<Text className="py-1.5">{card?.category?.name}</Text>
			<Text className="mt-1 font-normal text-sm text-center py-0.5 w-[55px] rounded-full text-white bg-primary">
				{convertPrice(card?.price)}
			</Text>
		</View>
	);
};
