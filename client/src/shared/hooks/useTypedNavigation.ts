import { NavigationProp, useNavigation } from "@react-navigation/native";

import { TypeRootStackParamList } from "../config";

export const useTypedNavigation = () =>
	useNavigation<NavigationProp<TypeRootStackParamList>>();
