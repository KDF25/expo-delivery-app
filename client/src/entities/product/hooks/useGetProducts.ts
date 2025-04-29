import { useQuery } from "@tanstack/react-query";

import { ENUM_QUERY_TAGS } from "@/shared/config";

import { ProductService } from "../api";

export const useGetProducts = (elementsCount?: number) => {
	const { data, isLoading } = useQuery({
		queryKey: [ENUM_QUERY_TAGS.GET_PRODUCTS],
		queryFn: () => ProductService.getAll(),
		select: (data) => data
	});
	const products =
		elementsCount && data && data?.length > elementsCount
			? data?.slice(0, elementsCount)
			: data;
	return { products, isLoading };
};
