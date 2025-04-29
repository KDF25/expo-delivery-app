import { useQuery } from "@tanstack/react-query";

import { CategoryService } from "../api";

export const useGetCategories = () => {
	const { data: categories, isLoading } = useQuery({
		queryKey: ["get categories"],
		queryFn: () => CategoryService.getAll(),
		select: (data) => {
			return data;
		}
	});

	return { categories, isLoading };
};
