import { useNavigationContainerRef } from "@react-navigation/native";
import { FC, useEffect, useState } from "react";

import { useAuth } from "@/shared/hooks";

import { ScreenNavigation } from "./screen-navigation";
import { TabNavigation } from "./tab-navigation";

export const Navigation: FC = () => {
	const { user } = useAuth();
	const [currentRoute, setCurrentRoute] = useState<string | undefined>(
		undefined
	);
	const navRef = useNavigationContainerRef();

	useEffect(() => {
		setCurrentRoute(navRef.getCurrentRoute()?.name);

		const lister = navRef.addListener("state", () => {
			setCurrentRoute(navRef.getCurrentRoute()?.name);
		});
		return () => {
			navRef.removeListener("state", lister);
		};
	}, []);

	return (
		<>
			<ScreenNavigation user={user} ref={navRef} />
			{user && (
				<TabNavigation
					currentRoute={currentRoute}
					nav={navRef.navigate}
				/>
			)}
		</>
	);
};
