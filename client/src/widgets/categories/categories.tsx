import { FC } from "react";
import { View } from "react-native";

import { Heading, Loader } from "@/shared/ui";

import { useCategory } from "@/entities/category";

import { CategoryCard } from "@/features/category-card";

export const Categories: FC = () => {
	const { categories, isLoading } = useCategory();

	return isLoading ? (
		<Loader />
	) : (
		<View className="flex flex-col mt-5 mb-4">
			<Heading>Categories</Heading>

			<View className="flex-row justify-center mt-5">
				{categories?.map((card) => (
					<CategoryCard key={card.id} card={card} />
				))}
			</View>
		</View>
	);
};
