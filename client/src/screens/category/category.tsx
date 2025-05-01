import { FC } from "react";
import { Text, View } from "react-native";

import { Loader } from "@/shared/ui";

import { useCategory } from "@/entities/category";

import { Layout } from "@/widgets/layout";
import { ProductsList } from "@/widgets/products-list";

export const Category: FC = () => {
	const { category, products, isLoading } = useCategory();

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
			{category?.slug ? (
				<ProductsList
					title={category?.name}
					products={products || []}
				/>
			) : (
				<Text>Category not found </Text>
			)}
		</Layout>
	);
};
