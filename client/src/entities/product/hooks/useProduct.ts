import { useQuery } from "@tanstack/react-query";

import { ENUM_APP_ROUTES, ENUM_QUERY_TAGS } from "@/shared/config";
import { useTypedRoute } from "@/shared/hooks";

import { ProductService } from "../api";

export const useProduct = () => {
	const { params } = useTypedRoute<ENUM_APP_ROUTES.PRODUCT>();

	const { isLoading, data: product } = useQuery({
		queryKey: [ENUM_QUERY_TAGS.GET_PRODUCT_BY_SLUG, params?.slug],
		queryFn: () => ProductService.getProductBySlug(params?.slug)
	});

	return {
		product,
		isLoading
	};
};
