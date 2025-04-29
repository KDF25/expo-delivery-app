import { useQuery } from "@tanstack/react-query";

import { ENUM_QUERY_TAGS } from "@/shared/config";

import { CategoryService } from "../api";

export const useGetCategories = () => {
	const { data: categories, isLoading } = useQuery({
		queryKey: [ENUM_QUERY_TAGS.GET_CATEGORIES],
		queryFn: () => CategoryService.getAll(),
		select: (data) => {
			return data;
		}
	});

	return { categories, isLoading };
};
