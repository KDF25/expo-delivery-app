import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FC } from "react";
import { Text } from "react-native";

import { APP_ROUTES_LIST, TypeRootStackParamList } from "@/shared/config";

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

export const Navigation: FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					// headerShown: false,
					contentStyle: { backgroundColor: "#FFF" },
					animation: "slide_from_right"
				}}
			>
				{APP_ROUTES_LIST.map((route) => (
					<Stack.Screen key={route.name} {...route} />
				))}
			</Stack.Navigator>
		</NavigationContainer>
	);
};
