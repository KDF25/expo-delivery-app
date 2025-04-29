import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { forwardRef } from "react";

import { ENUM_APP_ROUTES, TypeRootStackParamList } from "@/shared/config";

import { Auth } from "@/screens/auth";

import { APP_PRIVATE_ROUTES_LIST } from "../routes";

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

interface IScreenNavigationProps {
	isAuth: boolean;
}

export const ScreenNavigation = forwardRef<any, IScreenNavigationProps>(
	({ isAuth }, ref) => {
		return (
			<NavigationContainer ref={ref}>
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
						contentStyle: { backgroundColor: "#FFF" },
						animation: "slide_from_right"
					}}
				>
					{isAuth ? (
						<>
							{APP_PRIVATE_ROUTES_LIST.map((route) => (
								<Stack.Screen key={route.name} {...route} />
							))}
						</>
					) : (
						<Stack.Screen
							name={ENUM_APP_ROUTES.AUTH}
							component={Auth}
						/>
					)}
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
);
