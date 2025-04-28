import { FC } from "react";
import { Text, View } from "react-native";

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
			{!!searchTerm && (
				<View className="mt-2">
					{isLoading ? (
						<Loader />
					) : (
						<ProductsList products={products || []} />
					)}
				</View>
			)}
		</Layout>
	);
};
