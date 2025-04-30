import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { Pressable, Text, View } from "react-native";

import { useProfile } from "@/entities/user";

import { GoToCart } from "@/features/go-to-cart";

import { ENUM_APP_ROUTES } from "../config";
import { useTypedNavigation } from "../hooks";

export const Header: FC = () => {
	const { navigate } = useTypedNavigation();
	const { profile } = useProfile();

	return (
		<View className="flex-row items-center justify-between">
			<Text className="text-2xl font-medium">
				Hello, {profile?.name}!
			</Text>

			<GoToCart className="w-[50px] bg-yellow-300" />
		</View>
	);
};
