import { FC } from "react";
import { Control } from "react-hook-form";
import { Pressable, Text } from "react-native";

import { Button, Field } from "@/shared/ui";

import { IAuthFormData } from "@/entities/auth";

import { AUTH_FORM_FIELD_LIST } from "../model";

interface IAuthFormProps {
	handleSubmit: (data: any) => void;
	control: Control<IAuthFormData>;
	isReg: boolean;
	setIsReg: (isReg: boolean) => void;
}

export const AuthForm: FC<IAuthFormProps> = ({
	handleSubmit,
	control,
	isReg,
	setIsReg
}) => {
	return (
		<>
			{AUTH_FORM_FIELD_LIST.map((field, index) => (
				<Field<IAuthFormData>
					key={index}
					control={control}
					{...field}
				/>
			))}
			<Button onPress={handleSubmit}>
				{isReg ? "Sign Up" : "Login"}
			</Button>
			<Pressable onPress={() => setIsReg(!isReg)}>
				<Text className="text-center text-black text-base mt-6">
					{isReg
						? "Already have an account? "
						: "Don't have an account? "}
					<Text className="text-primary">
						{isReg ? "Login" : "Sign Up"}
					</Text>
				</Text>
			</Pressable>
		</>
	);
};
