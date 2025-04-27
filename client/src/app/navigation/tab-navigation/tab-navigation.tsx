import { FC } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { APP_TABS_ROUTES_LIST, TypeNavigate } from "../routes";

import { TabItem } from "./tab-item";

interface ITabNavigationProps {
	nav: TypeNavigate;
	currentRoute?: string;
}

export const TabNavigation: FC<ITabNavigationProps> = ({
	nav,
	currentRoute
}) => {
	const { bottom } = useSafeAreaInsets();
	return (
		<View
			className="pt-5 px-5 flex-row justify-between items-center w-full border-t border-t-solid border-t-[#bbbbbb] bg-white"
			style={{ paddingBottom: bottom + 20 }}
		>
			{APP_TABS_ROUTES_LIST.map((item) => (
				<TabItem
					key={item.path}
					item={item}
					nav={nav}
					currentRoute={currentRoute}
				/>
			))}
		</View>
	);
};
