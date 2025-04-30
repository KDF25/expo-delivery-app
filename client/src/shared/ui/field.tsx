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
							"w-full rounded-xl px-4 py-2 border shadow-sm bg-gray-50 ",
							error ? "border-red-500" : "border-gray-300"
						)}
					>
						<TextInput
							autoCapitalize="none"
							onChangeText={onChange}
							onBlur={onBlur}
							value={(value || "").toString()}
							className={cn(
								"text-base pb-3",
								rest.editable ? " text-black" : "text-gray-500"
							)}
							placeholderTextColor="#9ca3af"
							{...rest}
						/>
						{children}
					</View>
					{error && (
						<Text className="mt-1 ml-1 text-sm text-red-500">
							{error.message}
						</Text>
					)}
				</>
			)}
		/>
	);
};
