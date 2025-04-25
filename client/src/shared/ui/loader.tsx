import { FC } from "react";
import { ActivityIndicator } from "react-native";

import { COLORS } from "../config";

export const Loader: FC = () => {
	return <ActivityIndicator size={"large"} color={COLORS.primary.DEFAULT} />;
};
