import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { forwardRef } from "react";
import { SafeAreaView } from "react-native";

import {
	APP_PRIVATE_ROUTES_LIST,
	ENUM_APP_ROUTES,
	TypeRootStackParamList
} from "@/shared/config";

import { Auth } from "@/screens/auth";

import { TypedUserState } from "../../providers";

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

interface IScreenNavigationProps {
	user: TypedUserState;
}

export const ScreenNavigation = forwardRef<any, IScreenNavigationProps>(
	({ user }, ref) => {
		return (
			<NavigationContainer ref={ref}>
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
						contentStyle: { backgroundColor: "#FFF" },
						animation: "slide_from_right"
					}}
				>
					{user ? (
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
