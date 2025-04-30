import { Feather } from "@expo/vector-icons";
import { ComponentType } from "react";

export type TypeFeatherIconNames = keyof typeof Feather.glyphMap;

export type TypeRootStackParamList = {
	Auth: undefined;
	Home: undefined;
	Favorites: undefined;
	Search: undefined;
	Explorer: undefined;
	Profile: undefined;
	Cart: undefined;
	Thanks: undefined;
	Category: {
		slug: string;
	};
	Product: {
		slug: string;
	};
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
