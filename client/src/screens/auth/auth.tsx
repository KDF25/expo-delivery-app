import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { ENUM_APP_ROUTES } from '@/shared/config'
import { useTypedNavigation } from '@/shared/hooks'

export const Auth: FC = () => {
	const { navigate } = useTypedNavigation()
	return (
		<View>
			<Text>auth</Text>
			<Pressable onPress={() => navigate(ENUM_APP_ROUTES.HOME)}>
				<Text>Go home</Text>
			</Pressable>
		</View>
	)
}
