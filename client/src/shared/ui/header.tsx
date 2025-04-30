import { FC } from "react";
import { Text, View } from "react-native";

import { useProfile } from "@/entities/user";

import { GoToCart } from "./go-to-cart";

export const Header: FC = () => {
	const { profile } = useProfile();

	return (
		<View className="flex-row items-center justify-between">
			<Text className="text-2xl font-medium">
				Hello, {profile?.name}!
			</Text>
			<GoToCart className="w-[45px] bg-yellow-300" />
		</View>
	);
};
