import { FC } from "react";
import { Image, View } from "react-native";

import { GoToCart, Loader } from "@/shared/ui";

import { ProductPageInfo, useProduct } from "@/entities/product";

import { AddToCart } from "@/features/add-to-cart";

import { Layout } from "@/widgets/layout";
import { ProductHeader } from "@/widgets/product-header";

export const Product: FC = () => {
	const { isLoading, product } = useProduct();

	if (isLoading)
		return (
			<Layout>
				<Loader />
			</Layout>
		);

	if (!product) return null;

	return (
		<>
			<Layout>
				<ProductHeader product={product} />
				<View className="items-center justify-center mt-4">
					<Image
						source={{ uri: product?.image }}
						width={260}
						height={260}
					/>
				</View>
				<ProductPageInfo product={product} />
			</Layout>
			<View className="absolute flex-row items-center justify-between gap-5 px-4 mx-5 bottom-8">
				<AddToCart
					product={product}
					className="w-full mt-6"
					style={{ flexGrow: 1, flexBasis: 100 }}
				/>
				<GoToCart className="mt-6 bg-yellow-400 w-[45px]" />
			</View>
		</>
	);
};
