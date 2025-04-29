import { FC } from "react";

import { ENUM_PRODUCTS_COUNT } from "@/shared/config";
import { Loader } from "@/shared/ui";

import { useGetProducts } from "@/entities/product";

import { ProductsList } from "../products-list";

export const Products: FC = () => {
	const { isLoading, products } = useGetProducts(ENUM_PRODUCTS_COUNT.HOME);

	if (isLoading) return <Loader />;

	return <ProductsList title="Products" products={products || []} />;
};
