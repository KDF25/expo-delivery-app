import { useQuery } from "@tanstack/react-query";

import { ENUM_QUERY_TAGS } from "@/shared/config";

import { ProductService } from "../api";

import { useSearchForm } from "./useSearchFormData";

export const useSearchProduct = () => {
	const { searchTerm, debouncedSearch, control } = useSearchForm();
	const { data: products, isLoading } = useQuery({
		queryKey: [ENUM_QUERY_TAGS.SEARCH_PRODUCTS, debouncedSearch],
		queryFn: () => ProductService.getAll(debouncedSearch),
		enabled: !!debouncedSearch
	});

	return { searchTerm, debouncedSearch, control, products, isLoading };
};
