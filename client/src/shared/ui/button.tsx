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
				"self-center bg-primary  py-3 font-light rounded-lg",
				className
			)}
			{...rest}
		>
			<Text className="text-lg font-medium text-center text-white">
				{children}
			</Text>
		</Pressable>
	);
};
