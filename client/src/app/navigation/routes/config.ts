import { Explorer } from "@/screens/explorer";
import { Favorites } from "@/screens/favorites";
import { Home } from "@/screens/home";
import { Profile } from "@/screens/profile";
import { Search } from "@/screens/search";

import { ENUM_APP_ROUTES } from "./routes.enum";
import { IRoute, ITabItem } from "./routes.types";

export const APP_PRIVATE_ROUTES_LIST: IRoute[] = [
	{
		name: ENUM_APP_ROUTES.HOME,
		component: Home
	},
	{
		name: ENUM_APP_ROUTES.FAVORITES,
		component: Favorites
	},
	{
		name: ENUM_APP_ROUTES.PROFILE,
		component: Profile
	},
	{
		name: ENUM_APP_ROUTES.SEARCH,
		component: Search
	},
	{
		name: ENUM_APP_ROUTES.EXPLORER,
		component: Explorer
	}
];

export const APP_TABS_ROUTES_LIST: ITabItem[] = [
	{
		icon: "home",
		path: ENUM_APP_ROUTES.HOME
	},
	{
		icon: "heart",
		path: ENUM_APP_ROUTES.FAVORITES
	},
	{
		icon: "search",
		path: ENUM_APP_ROUTES.SEARCH
	},
	{
		icon: "shopping-bag",
		path: ENUM_APP_ROUTES.EXPLORER
	},
	{
		icon: "user",
		path: ENUM_APP_ROUTES.PROFILE
	}
];
