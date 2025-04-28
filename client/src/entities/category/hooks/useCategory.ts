import { useQuery } from "@tanstack/react-query";

import { CategoryService } from "../api";

export const useCategory = () => {
	const { data: categories, isLoading } = useQuery({
		queryKey: ["get categories"],
		queryFn: () => CategoryService.getAll(),
		select: (data) => {
			return data;
		}
	});

	return { categories, isLoading };
};
