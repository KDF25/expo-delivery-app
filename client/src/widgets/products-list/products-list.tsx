import { FC } from "react";
import { Image, Text, View } from "react-native";

import { IMAGES } from "@/shared/assets";
import { Heading } from "@/shared/ui";

import { ICatalog } from "@/entities/product";

import { ProductCard } from "@/features/product-card";

export const ProductsList: FC<ICatalog> = ({ title, products }) => {
	return (
		<View className="flex-1 mb-16">
			{title && <Heading>{title}</Heading>}

			{products?.length ? (
				<View className="flex-row flex-wrap justify-between mt-4">
					{products.map((card) => (
						<ProductCard key={card.id} card={card} />
					))}
				</View>
			) : (
				<View className="items-center justify-center flex-1">
					<Image
						source={IMAGES.box}
						style={{ width: 100, height: 100 }}
					/>
					<Text className="mt-2 font-semibold">
						Products not found
					</Text>
				</View>
			)}
		</View>
	);
};
