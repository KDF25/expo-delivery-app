import { StripeProvider } from "@stripe/stripe-react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { Toast } from "@/shared/ui";

import { persistor, store } from "@/entities/store";

import { Navigation } from "@/app/navigation";
import { AuthProvider } from "@/app/providers";

import "./src/shared/styles/global.css";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
});

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<PersistGate persistor={persistor} loading={null}>
					<AuthProvider>
						<SafeAreaProvider>
							<StripeProvider
								publishableKey={
									process.env.STRIPE_PUBLISHABLE_KEY || ""
								}
							>
								<Navigation />
							</StripeProvider>
						</SafeAreaProvider>
					</AuthProvider>
					<StatusBar style="light" />
					<Toast />
				</PersistGate>
			</Provider>
		</QueryClientProvider>
	);
}
