import { FC } from "react";
import { Text, View } from "react-native";

interface IUserInfoRowProps {
	title: string;
	value: string | undefined;
}

export const UserInfoRow: FC<IUserInfoRowProps> = ({ title, value }) => {
	return (
		<View>
			<Text className="mb-1 text-sm text-gray-500 ">{title}</Text>
			<View className="w-full px-4 py-3 border border-gray-300 shadow-sm rounded-xl bg-gray-50">
				<Text className="text-base text-black">{value}</Text>
			</View>
		</View>
	);
};
