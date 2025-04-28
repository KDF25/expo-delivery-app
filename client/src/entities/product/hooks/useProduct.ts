import { useQuery } from "@tanstack/react-query";

import { ProductService } from "../api";

export const useProduct = (elementsCount?: number) => {
	const { data, isLoading } = useQuery({
		queryKey: ["get products"],
		queryFn: () => ProductService.getAll(),
		select: (data) => data
	});
	const products =
		elementsCount && data && data?.length > elementsCount
			? data?.slice(0, elementsCount)
			: data;
	return { products, isLoading };
};
