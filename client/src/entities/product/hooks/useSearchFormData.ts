import { useMemo } from "react";
import { useForm } from "react-hook-form";

import { useDebounce } from "@/shared/hooks";

import { ISearchFormData } from "../types";

export const useSearchForm = () => {
	const { control, watch } = useForm<ISearchFormData>({
		mode: "onChange"
	});

	const searchTerm = watch("searchTerm");
	const debouncedSearch = useDebounce(searchTerm, 500);

	return useMemo(
		() => ({ debouncedSearch, searchTerm, control }),
		[searchTerm]
	);
};
