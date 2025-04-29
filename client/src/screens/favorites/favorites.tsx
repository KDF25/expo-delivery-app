import { FC } from "react";

import { useProfile } from "@/entities/user";

import { Layout } from "@/widgets/layout";
import { ProductsList } from "@/widgets/products-list";

export const Favorites: FC = () => {
	const { profile } = useProfile();

	return (
		<Layout>
			<ProductsList
				title="Favorites"
				products={profile?.favorites || []}
			/>
		</Layout>
	);
};
