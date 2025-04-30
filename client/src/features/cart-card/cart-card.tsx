import { FC } from 'react'
import { Image, Pressable, Text, View } from 'react-native'

import { CartActions, ICartItem } from '@/entities/cart'
import { useTypedNavigation } from '@/shared/hooks'
import { convertPrice } from '@/shared/utils'

interface ICartItemProps {
	item: ICartItem
}

export const CartItem: FC<ICartItemProps> = ({ item }) => {
	const { navigate } = useTypedNavigation()

	return (
		<View className='flex-row mt-5'>
			<Pressable
				onPress={() => navigate('Product', { slug: item.product.slug })}
				className='items-center px-3 py-3 overflow-hidden bg-gray-100 rounded-xl w-28'
			>
				<Image
					source={{uri: item.product.image}}
					width={80}
					height={80}
				/>
			</Pressable>

			<View className='mt-2 ml-5'>
				<Text className='text-xl font-semibold'>
					{item.product.name}
				</Text>
				<Text className='mt-1'>{convertPrice(item.price)}</Text>
				<CartActions item={item} />
			</View>
		</View>
	)
}

