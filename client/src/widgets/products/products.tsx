import { FC } from "react";

import { Loader } from "@/shared/ui";

import { useProduct } from "@/entities/product";

import { ProductsList } from "../products-list";

export const Products: FC = () => {
	const { isLoading, products } = useProduct();
	return isLoading ? (
		<Loader />
	) : (
		<ProductsList title="Products" products={products || []} />
	);
};
