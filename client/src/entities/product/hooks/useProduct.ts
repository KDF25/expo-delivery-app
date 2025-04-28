import { useQuery } from "@tanstack/react-query";

import { ProductService } from "../api";

export const useProduct = () => {
	const { data: products, isLoading } = useQuery({
		queryKey: ["get products"],
		queryFn: () => ProductService.getAll(),
		select: (data) => data.slice(0, 4)
	});

	return { products, isLoading };
};
