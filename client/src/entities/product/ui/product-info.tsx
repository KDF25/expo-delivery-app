import { FC } from "react";
import { Text, View } from "react-native";

import { convertPrice } from "@/shared/utils";

import { IProduct } from "../types";

interface IProductInfo {
	product: IProduct;
}

export const ProductInfo: FC<IProductInfo> = ({ product }) => {
	return (
		<View className="my-3">
			<Text className="text-base font-semibold">{product?.name}</Text>
			<Text className="py-1.5">{product?.category?.name}</Text>
			<Text className="mt-1 font-normal text-sm text-center py-0.5 w-[55px] rounded-full text-white bg-primary">
				{convertPrice(product?.price)}
			</Text>
		</View>
	);
};
