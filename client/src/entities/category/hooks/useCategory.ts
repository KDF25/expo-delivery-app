import { useQuery } from "@tanstack/react-query";

import { ENUM_APP_ROUTES, ENUM_QUERY_TAGS } from "@/shared/config";
import { useTypedRoute } from "@/shared/hooks";

import { ProductService } from "@/entities/product";

import { CategoryService } from "../api";

export const useCategory = () => {
	const { params } = useTypedRoute<ENUM_APP_ROUTES.CATEGORY>();

	const { isLoading: isCategoryLoading, data: category } = useQuery({
		queryKey: [ENUM_QUERY_TAGS.GET_CATEGORY_BY_SLUG, params.slug],
		queryFn: () => CategoryService.getCategoryBySlug(params.slug)
	});
	const categoryId = category?.id || "";

	const { isLoading: isProductLoading, data: products } = useQuery({
		queryKey: [ENUM_QUERY_TAGS.GET_PRODUCTS_BY_CATEGORY_SLUG, params.slug],
		queryFn: () => ProductService.getProductByCategorySlug(params.slug),
		enabled: !!categoryId
	});

	return {
		category,
		products,
		isLoading: isCategoryLoading || isProductLoading
	};
};
