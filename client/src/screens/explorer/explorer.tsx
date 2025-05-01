import { FC } from "react";
import { View } from "react-native";

import { Loader } from "@/shared/ui";

import { useGetProducts } from "@/entities/product";

import { Layout } from "@/widgets/layout";
import { ProductsList } from "@/widgets/products-list";

export const Explorer: FC = () => {
	const { products, isLoading } = useGetProducts();

	if (isLoading)
		return (
			<Layout>
				<View className="items-center justify-center h-full">
					<Loader />
				</View>
			</Layout>
		);

	return (
		<Layout>
			<ProductsList title="Explorer" products={products || []} />
		</Layout>
	);
};
