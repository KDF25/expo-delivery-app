import { useQuery } from "@tanstack/react-query";

import { ENUM_QUERY_TAGS } from "@/shared/config";

import { UserService } from "../api";

export const useProfile = () => {
	const { data: profile } = useQuery({
		queryKey: [ENUM_QUERY_TAGS.GET_PROFILE],
		queryFn: () => UserService.getProfile()
	});

	return { profile };
};
