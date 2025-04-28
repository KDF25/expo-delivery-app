import { FC } from "react";

import { Banner, Header } from "@/shared/ui";

import { Categories } from "@/widgets/categories";
import { Layout } from "@/widgets/layout";

export const Home: FC = () => {
	return (
		<Layout>
			<Header />
			<Banner />
			<Categories />
		</Layout>
	);
};
