import { FontAwesome } from "@expo/vector-icons";
import { FC } from "react";
import { Text, View } from "react-native";

export const Thanks: FC = () => {
	return (
		<View className="items-center justify-center mt-40">
			<FontAwesome name="check-circle" size={100} color="#61ab2c" />
			<Text className="mt-8 text-5xl font-bold">Thank you!</Text>
		</View>
	);
};
