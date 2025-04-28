import { FC } from "react";

import { ENUM_PRODUCTS_COUNT } from "@/shared/config";
import { Loader } from "@/shared/ui";

import { useProduct } from "@/entities/product";

import { ProductsList } from "../products-list";

export const Products: FC = () => {
	const { isLoading, products } = useProduct(ENUM_PRODUCTS_COUNT.HOME);
	return isLoading ? (
		<Loader />
	) : (
		<ProductsList title="Products" products={products || []} />
	);
};
