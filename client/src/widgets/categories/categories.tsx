import { FC } from "react";
import { ScrollView, View } from "react-native";

import { Heading, Loader } from "@/shared/ui";

import { useGetCategories } from "@/entities/category";

import { CategoryCard } from "@/features/category-card";

export const Categories: FC = () => {
	const { categories, isLoading } = useGetCategories();

	if (isLoading) return <Loader />;

	return (
		<View className="flex flex-col mt-5 mb-4">
			<Heading>Categories</Heading>

			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				className="mt-5"
			>
				{categories?.map((card) => (
					<CategoryCard key={card.id} card={card} />
				))}
			</ScrollView>
		</View>
	);
};
