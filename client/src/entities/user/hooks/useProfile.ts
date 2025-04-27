import { useQuery } from "@tanstack/react-query";

import { UserService } from "../api";

export const useProfile = () => {
	const { data: profile } = useQuery({
		queryKey: ["get profile"],
		queryFn: () => UserService.getProfile()
	});

	return { profile };
};
