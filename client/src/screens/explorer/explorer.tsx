import { FC } from "react";

import { Loader } from "@/shared/ui";

import { useProduct } from "@/entities/product";

import { Layout } from "@/widgets/layout";
import { ProductsList } from "@/widgets/products-list";

export const Explorer: FC = () => {
	const { products, isLoading } = useProduct();
	return (
		<Layout>
			{isLoading ? (
				<Loader />
			) : (
				<ProductsList title="Explorer" products={products || []} />
			)}
		</Layout>
	);
};
