import { StatusBar } from 'expo-status-bar'
import { Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Navigation } from '@/shared/app'

export default function App() {
	return (
		<>
			<SafeAreaProvider>
				<Navigation />
				<Text>AppHome</Text>
			</SafeAreaProvider>
			<StatusBar style='light' />
		</>
	)
}
