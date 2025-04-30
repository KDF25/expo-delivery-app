import cn from "clsx";
import { FC, PropsWithChildren } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ILayout {
	className?: string;
}

export const Layout: FC<PropsWithChildren<ILayout>> = ({
	children,
	className
}) => {
	return (
		<SafeAreaView
			edges={["top", "left", "right"]}
			className={cn("h-full w-full  px-4 bg-white", className)}
		>
			<ScrollView showsVerticalScrollIndicator={false}>
				{children}
			</ScrollView>
		</SafeAreaView>
	);
};
