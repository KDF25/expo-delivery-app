import { Feather } from "@expo/vector-icons";
import { FC } from "react";
import { Pressable, Text, View } from "react-native";

import { COLORS, ITabItem, TypeNavigate } from "@/shared/config";

interface ITabItemProps {
	item: ITabItem;
	nav: TypeNavigate;
	currentRoute?: string;
}

export const TabItem: FC<ITabItemProps> = ({ item, nav, currentRoute }) => {
	const isActive = currentRoute === item.path;
	return (
		<Pressable
			className="items-center w-[20%]"
			onPress={() => nav(item.path)}
		>
			<Feather
				name={item.icon}
				size={26}
				color={isActive ? COLORS.primary.DEFAULT : COLORS.black[100]}
			/>
		</Pressable>
	);
};
