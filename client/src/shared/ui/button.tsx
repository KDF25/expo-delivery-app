import cn from "clsx";
import { FC, PropsWithChildren } from "react";
import { Pressable, PressableProps, Text } from "react-native";

export interface IButtonProps extends PressableProps {
	className?: string;
}

export const Button: FC<PropsWithChildren<IButtonProps>> = ({
	children,
	className,
	...rest
}) => {
	return (
		<Pressable
			className={cn(
				"self-center mt-3.5 bg-primary w-full py-3 font-light rounded-lg",
				className
			)}
			{...rest}
		>
			<Text className="text-white text-center font-medium text-lg">
				{children}
			</Text>
		</Pressable>
	);
};
