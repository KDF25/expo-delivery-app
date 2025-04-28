import { FC } from "react";
import { Image, Pressable, Text, View } from "react-native";

import { ENUM_APP_ROUTES } from "@/shared/config";
import { useTypedNavigation } from "@/shared/hooks";

import { ICategory } from "@/entities/category";

interface ICategoryCardProps {
	card: ICategory;
}

export const CategoryCard: FC<ICategoryCardProps> = ({ card }) => {
	const { navigate } = useTypedNavigation();

	return (
		<Pressable
			onPress={() =>
				navigate(ENUM_APP_ROUTES.CATEGORY, { slug: card?.slug })
			}
			className="p-5 mx-2 bg-gray-100 rounded-xl"
		>
			<Image
				source={{ uri: card?.image }}
				className="w-10 h-8 p-3 mb-2"
				style={{ resizeMode: "cover" }}
			/>
			<Text className="text-xs font-normal text-center">
				{card?.name}
			</Text>
		</Pressable>
	);
};
