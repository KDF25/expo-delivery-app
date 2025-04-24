import { Auth } from "@/screens/auth";
import { Home } from "@/screens/home";

import { ENUM_APP_ROUTES } from "./routes.enum";
import { IRoute } from "./types";

export const APP_ROUTES_LIST: IRoute[] = [
	{
		name: ENUM_APP_ROUTES.AUTH,
		component: Auth
	},
	{
		name: ENUM_APP_ROUTES.HOME,
		component: Home
	}
];
