import { useNavigationContainerRef } from "@react-navigation/native";
import { FC, useEffect, useState } from "react";

import { useAuth, useCheckAuth } from "@/shared/hooks";

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

	useCheckAuth(currentRoute);

	return (
		<>
			<ScreenNavigation isAuth={!!user} ref={navRef} />
			{!!user && currentRoute && (
				<TabNavigation
					currentRoute={currentRoute}
					nav={navRef.navigate}
				/>
			)}
		</>
	);
};
