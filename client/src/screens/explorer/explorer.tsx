import { FC } from "react";

import { Loader } from "@/shared/ui";

import { useGetProducts } from "@/entities/product";

import { Layout } from "@/widgets/layout";
import { ProductsList } from "@/widgets/products-list";

export const Explorer: FC = () => {
	const { products, isLoading } = useGetProducts();

	if (isLoading)
		return (
			<Layout>
				<Loader />
			</Layout>
		);

	return (
		<Layout>
			<ProductsList title="Explorer" products={products || []} />
		</Layout>
	);
};
