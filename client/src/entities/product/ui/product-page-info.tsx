import { FC } from "react";
import { Text, View } from "react-native";

import { convertPrice } from "@/shared/utils";

import { IProduct } from "../types";

interface IProductPageInfoProps {
	product: IProduct;
}

export const ProductPageInfo: FC<IProductPageInfoProps> = ({ product }) => {
	return (
		<View className="mt-7">
			<Text className="text-2xl font-bold">{product.name}</Text>
			<Text className="mt-2 text-base opacity-70">
				{product.description}
			</Text>
			<Text className="mt-6 text-3xl font-semibold text-primary">
				{convertPrice(product.price)}
			</Text>
		</View>
	);
};
