import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { AuthProvider, Navigation } from "@/shared/app";

import { Toast } from "@/shared/ui";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./src/shared/styles/global.css";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<SafeAreaProvider>
					<Navigation />
				</SafeAreaProvider>
			</AuthProvider>
			<StatusBar style="light" />
			<Toast/>
		</QueryClientProvider>
	);
}
