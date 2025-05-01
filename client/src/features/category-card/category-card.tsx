import { FC } from "react";
import { Image, Pressable, Text } from "react-native";

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
			className="p-5 mx-2 bg-gray-100 rounded-xl min-w-[100px] items-center justify-center"
		>
			<Image
				source={{ uri: card?.image }}
				className="mb-2"
				width={40}
				height={40}
			/>
			<Text className="text-xs font-normal text-center">
				{card?.name}
			</Text>
		</Pressable>
	);
};
