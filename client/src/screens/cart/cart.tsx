import { FC } from "react";
import { Image, Text, View } from "react-native";

import { IMAGES } from "@/shared/assets";
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
					// <Text className="mt-2">Cart is empty</Text>
					<View className="items-center justify-center flex-1">
						<Image
							source={IMAGES.box}
							style={{ width: 100, height: 100 }}
						/>
						<Text className="mt-2 font-semibold">
							Cart is empty
						</Text>
					</View>
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
