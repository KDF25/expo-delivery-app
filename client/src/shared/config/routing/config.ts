import { Auth } from "@/screens/auth";
import { IRoute } from "./types";
import { ENUM_APP_ROUTES } from "./routes.enum";
import { Home } from "@/screens/home";

export const APP_ROUTES_LIST: IRoute[] = [
    {
        name: ENUM_APP_ROUTES.AUTH,
        component: Auth,
    },
    {
        name: ENUM_APP_ROUTES.HOME,
        component: Home,
    }
]