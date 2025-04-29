import { useQuery } from "@tanstack/react-query";

import { ENUM_APP_ROUTES } from "@/shared/config";
import { useTypedRoute } from "@/shared/hooks";

import { ProductService } from "../api";

export const useProduct = () => {
	const { params } = useTypedRoute<ENUM_APP_ROUTES.PRODUCT>();

	const { isLoading, data: product } = useQuery({
		queryKey: ["get product by slug", params?.slug],
		queryFn: () => ProductService.getProductBySlug(params?.slug)
	});

	return {
		product,
		isLoading
	};
};
