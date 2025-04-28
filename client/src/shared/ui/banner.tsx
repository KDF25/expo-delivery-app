import { FC } from "react";
import { Image, Pressable, Text, View } from "react-native";

import { IMAGES } from "../assets";
import { ENUM_APP_ROUTES } from "../config";
import { useTypedNavigation } from "../hooks";

export const Banner: FC = () => {
	const { navigate } = useTypedNavigation();

	return (
		<View className="flex-row justify-between w-full px-5 py-5 mt-5 bg-primary rounded-2xl">
			<View>
				<Text className="w-56 text-xl font-medium text-white">
					Fast delivery - delicious choice every time!
				</Text>

				<Pressable
					onPress={() => navigate(ENUM_APP_ROUTES.EXPLORER)}
					className="py-2 mt-4 bg-black rounded-full w-28"
				>
					<Text className="font-medium text-center text-white">
						Order now
					</Text>
				</Pressable>
			</View>

			<View className="absolute bottom-0 right-4 w-28 h-28">
				<Image source={IMAGES.banner} className="w-full h-full" />
			</View>
		</View>
	);
};
