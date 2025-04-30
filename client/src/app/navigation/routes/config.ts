import { ENUM_APP_ROUTES, IRoute, ITabItem } from "@/shared/config";

import { Cart } from "@/screens/cart";
import { Category } from "@/screens/category";
import { Explorer } from "@/screens/explorer";
import { Favorites } from "@/screens/favorites";
import { Home } from "@/screens/home";
import { Product } from "@/screens/product";
import { Profile } from "@/screens/profile";
import { Search } from "@/screens/search";
import { Thanks } from "@/screens/thanks";

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
	},
	{
		name: ENUM_APP_ROUTES.CART,
		component: Cart
	},
	{
		name: ENUM_APP_ROUTES.CATEGORY,
		component: Category
	},
	{
		name: ENUM_APP_ROUTES.PRODUCT,
		component: Product
	},
	{
		name: ENUM_APP_ROUTES.THANKS,
		component: Thanks
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
