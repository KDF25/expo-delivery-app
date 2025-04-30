import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { PressableProps } from "react-native";

import { ENUM_APP_ROUTES } from "../config";
import { useTypedNavigation } from "../hooks";

import { Button } from "./button";

interface GoToCartProps extends PressableProps {}

export const GoToCart: FC<GoToCartProps> = ({ ...props }) => {
	const { navigate } = useTypedNavigation();
	return (
		<Button onPress={() => navigate(ENUM_APP_ROUTES.CART)} {...props}>
			<Ionicons name="cart" size={26} color="white" />
		</Button>
	);
};
