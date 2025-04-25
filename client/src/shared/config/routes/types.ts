import { Feather } from "@expo/vector-icons";
import { ComponentType } from "react";

type TypeFeatherIconNames = keyof typeof Feather.glyphMap;

export type TypeRootStackParamList = {
	Auth: undefined;
	Home: undefined;
	Favorites: undefined;
	Search: undefined;
	Explorer: undefined;
	Profile: undefined;
};

export interface IRoute {
	name: keyof TypeRootStackParamList;
	component: ComponentType<any>;
}

export interface ITabItem {
	icon: TypeFeatherIconNames;
	path: keyof TypeRootStackParamList;
}

export type TypeNavigate = (screenName: keyof TypeRootStackParamList) => void;
