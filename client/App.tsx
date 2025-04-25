import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { AuthProvider, Navigation } from "@/shared/app";

import "./src/shared/styles/global.css";
import { Toast } from "@/shared/ui";

export default function App() {
	return (
		<>
			<AuthProvider>
				<SafeAreaProvider>
					<Navigation />
				</SafeAreaProvider>
			</AuthProvider>
			<StatusBar style="light" />
			<Toast/>
		</>
	);
}
