import { useQuery } from "@tanstack/react-query";

import { ProductService } from "../api";

import { useSearchForm } from "./useSearchFormData";

export const useSearchProduct = () => {
	const { searchTerm, debouncedSearch, control } = useSearchForm();
	const { data: products, isLoading } = useQuery({
		queryKey: ["search products", debouncedSearch],
		queryFn: () => ProductService.getAll(debouncedSearch),
		enabled: !!debouncedSearch
	});

	return { searchTerm, debouncedSearch, control, products, isLoading };
};
