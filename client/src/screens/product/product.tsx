import { FC } from "react";
import { Image, View } from "react-native";

import { Loader } from "@/shared/ui";

import { ProductPageInfo, useProduct } from "@/entities/product";

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
			{/* <AddToCartButton product={product} /> */}
		</Layout>
	);
};
