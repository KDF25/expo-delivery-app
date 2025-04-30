import { FC } from "react";
import { Text, View } from "react-native";

import { Button, Heading } from "@/shared/ui";
import { convertPrice } from "@/shared/utils";

import { useCart, useCheckout } from "@/entities/cart";

import { CartItem } from "@/features/cart-card";

import { Layout } from "@/widgets/layout";

export const Cart: FC = () => {
	const { items, total } = useCart();
	const { onCheckout } = useCheckout();

	return (
		<>
			<Layout>
				<Heading>Cart</Heading>

				{items?.length ? (
					items.map((item) => (
						<CartItem key={item.id + item.product.id} item={item} />
					))
				) : (
					<Text className="mt-2">Cart is empty</Text>
				)}
			</Layout>

			{!!items.length && (
				<View className="bottom-8 absolute w-[90%] mx-5">
					<Text className="text-xl font-bold">
						Total: {convertPrice(total)}
					</Text>
					<Button onPress={() => onCheckout()}>Place order</Button>
				</View>
			)}
		</>
	);
};
