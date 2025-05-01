import { FC } from "react";
import { Image, Text, View } from "react-native";

import { IMAGES } from "@/shared/assets";
import { Field, Heading, Loader } from "@/shared/ui";

import { ISearchFormData, useSearchProduct } from "@/entities/product";

import { Layout } from "@/widgets/layout";
import { ProductsList } from "@/widgets/products-list";

export const Search: FC = () => {
	const { searchTerm, control, isLoading, products } = useSearchProduct();
	return (
		<Layout>
			<Heading>Search</Heading>
			<View className="mt-5">
				<Field<ISearchFormData>
					control={control}
					name="searchTerm"
					placeholder="Search..."
					keyboardType="web-search"
				/>
			</View>
			{!!searchTerm ? (
				<View className="flex-1 mt-2">
					{isLoading ? (
						<Loader />
					) : (
						<ProductsList products={products || []} />
					)}
				</View>
			) : (
				<View className="items-center justify-center flex-1">
					<Image
						source={IMAGES.search}
						style={{ width: 100, height: 100 }}
					/>
					<Text className="mt-2 font-semibold">Search some food</Text>
				</View>
			)}
		</Layout>
	);
};
