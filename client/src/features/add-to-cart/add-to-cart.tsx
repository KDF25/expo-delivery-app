import { FC } from "react";
import { Text, View } from "react-native";

import { Button } from "@/shared/ui";

import { IProduct } from "@/entities/product";

interface IAddToCartProps {
	product: IProduct;
}

export const AddToCart: FC<IAddToCartProps> = ({ product }) => {
	// const { addToCart, removeFromCart } = useActions();
	// const { items } = useCart();

	// const currentElement = items.find(
	// 	(cartItem) => cartItem.product.id === product.id
	// );

	return (
		<></>
		// <Button
		// 	onPress={() =>
		// 		currentElement
		// 			? removeFromCart({ id: currentElement.id })
		// 			: addToCart({
		// 					product,
		// 					quantity: 1,
		// 					price: product.price
		// 				})
		// 	}
		// 	className="mt-6"
		// >
		// 	{currentElement ? "Remove from cart" : "Add to cart"}
		// </Button>
	);
};
