import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";

import { ENUM_APP_ROUTES } from "@/shared/config";
import { useTypedNavigation } from "@/shared/hooks";
import { Button } from "@/shared/ui";

interface GoToCartProps {
	className?: string;
}

export const GoToCart: FC<GoToCartProps> = ({ className }) => {
	const { navigate } = useTypedNavigation();
	return (
		<Button
			onPress={() => navigate(ENUM_APP_ROUTES.CART)}
			className={className}
		>
			<Ionicons name="cart" size={26} color="white" />
		</Button>
	);
};
