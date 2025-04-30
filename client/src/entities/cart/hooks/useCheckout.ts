import { OrderService } from '@/entities/order'
import { useActions } from '@/entities/store/hooks/useActions'
import { ENUM_APP_ROUTES, ENUM_QUERY_TAGS } from '@/shared/config'
import { useTypedNavigation } from '@/shared/hooks'
import { useStripe } from '@stripe/stripe-react-native'
import { useMutation } from '@tanstack/react-query'
import { useCart } from './useCart'

export const useCheckout = () => {
	const { items } = useCart()
	const { reset } = useActions()
	const { navigate } = useTypedNavigation()

	const { initPaymentSheet, presentPaymentSheet } = useStripe()

	const { mutateAsync: placeOrder } = useMutation({
		mutationKey: [ENUM_QUERY_TAGS.PLACE_ORDER],
		mutationFn: () =>
			OrderService.place({
				items: items.map(item => ({
					price: item.price,
					quantity: item.quantity,
					productId: item.product.id
				}))
			})
	})

	const onCheckout = async () => {
		try {
			const { clientSecret } = await placeOrder()

			const { error } = await initPaymentSheet({
				merchantDisplayName: 'Your Merchant Name',
				paymentIntentClientSecret: clientSecret
			})

			if (error) {
				console.error('Error initializing payment sheet:', error)
				return
			}

			const { error: paymentError } = await presentPaymentSheet()
			if (paymentError) {
				console.error('Error presenting payment sheet:', paymentError)
				return
			}

			reset()
			navigate(ENUM_APP_ROUTES.THANKS)
		} catch (error) {
			console.error('Checkout error:', error)
		}
	}

	return { onCheckout }
}
