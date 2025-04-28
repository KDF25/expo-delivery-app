import { FC } from "react";

import { Banner, Header } from "@/shared/ui";

import { Categories } from "@/widgets/categories";
import { Layout } from "@/widgets/layout";
import { Products } from "@/widgets/products";

export const Home: FC = () => {
	return (
		<Layout>
			<Header />
			<Banner />
			<Categories />
			<Products />
		</Layout>
	);
};
