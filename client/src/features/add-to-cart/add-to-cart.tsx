import { FC } from "react";

import { Button } from "@/shared/ui";

import { useCart } from "@/entities/cart";
import { IProduct } from "@/entities/product";
import { useActions } from "@/entities/store";

interface IAddToCartProps {
	product: IProduct;
	className?: string;
}

export const AddToCart: FC<IAddToCartProps> = ({ product, className }) => {
	const { addToCart, removeFromCart } = useActions();
	const { items } = useCart();

	const currentElement = items.find(
		(cartItem) => cartItem.product.id === product.id
	);

	return (
		<Button
			onPress={() =>
				currentElement
					? removeFromCart({ id: currentElement.id })
					: addToCart({
							product,
							quantity: 1,
							price: product.price
						})
			}
			className={className}
		>
			{currentElement ? "Remove from cart" : "Add to cart"}
		</Button>
	);
};
