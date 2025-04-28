import { FC } from "react";
import { Text, View } from "react-native";

import { Heading } from "@/shared/ui";

import { ICatalog } from "@/entities/product";

import { ProductCard } from "@/features/product-card";

export const ProductsList: FC<ICatalog> = ({ title, products }) => {
	return (
		<View className="mb-16">
			{title && <Heading>{title}</Heading>}

			{products?.length ? (
				<View className="flex-row flex-wrap justify-between mt-4">
					{products.map((card) => (
						<ProductCard key={card.id} card={card} />
					))}
				</View>
			) : (
				<Text className="mt-2">Products not found</Text>
			)}
		</View>
	);
};
