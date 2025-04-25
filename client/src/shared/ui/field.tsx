import cn from "clsx";
import {
	Control,
	Controller,
	FieldPath,
	FieldValues,
	RegisterOptions
} from "react-hook-form";
import { Text, TextInput, TextInputProps, View } from "react-native";

export interface IFieldProps<T extends FieldValues>
	extends Omit<TextInputProps, "onChange" | "onChangeText" | "value"> {
	control: Control<T>;
	name: FieldPath<T>;
	rules?: Omit<
		RegisterOptions<T, FieldPath<T>>,
		"valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
	>;
}

export const Field = <T extends Record<string, any>>({
	control,
	name,
	rules,
	children,
	...rest
}: IFieldProps<T>): JSX.Element => {
	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({
				field: { onChange, value, onBlur },
				fieldState: { error }
			}) => (
				<>
					<View
						className={cn(
							"bg-white w-full rounded-lg pb-4 pt-2.5 px-4 my-1 border",
							error ? "border-red-500" : "border-gray-400"
						)}
					>
						<TextInput
							autoCapitalize="none"
							onChangeText={onChange}
							onBlur={onBlur}
							value={(value || "").toString()}
							className="text-black text-base"
							placeholderTextColor="#6a6a6a"
							{...rest}
						/>
						{children}
					</View>
					{error && (
						<Text className="text-red-500 text-sm mt-1">
							{error.message}
						</Text>
					)}
				</>
			)}
		/>
	);
};
