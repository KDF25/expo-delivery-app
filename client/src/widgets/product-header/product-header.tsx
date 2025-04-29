import { FC } from "react";
import { View } from "react-native";

import { useTypedNavigation } from "@/shared/hooks";

import { IProduct, ProductButton } from "@/entities/product";

import { AddToFavorite } from "@/features/add-to-favorite";

export interface IProductComponent {
	product: IProduct;
}

export const ProductHeader: FC<IProductComponent> = ({ product }) => {
	const { goBack } = useTypedNavigation();

	return (
		<View>
			<View className="flex-row justify-between mt-2">
				<ProductButton
					onPress={goBack}
					icon="chevron-left"
					iconSize={26}
					color="#555"
				/>
				<AddToFavorite productId={product.id} />
			</View>
		</View>
	);
};
