import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { Text, View } from "react-native";

import { Loader } from "@/shared/ui";

import { IAuthFormData } from "@/entities/auth";

import { AuthForm } from "@/widgets/auth-form";

export const Auth: FC = () => {
	const [isReg, setIsReg] = useState(false);
	const { handleSubmit, reset, control } = useForm<IAuthFormData>({
		mode: "onChange"
	});
	const onSubmit = (data: IAuthFormData) => {};

	const isLoading = false;

	return (
		<View className="mx-2 items-center justify-center h-full">
			<View className="w-9/12">
				<Text className="text-center text-black text-3xl font-medium mb-8">
					{isReg ? "Sign Up" : "Login"}
				</Text>
				{isLoading ? (
					<Loader />
				) : (
					<AuthForm
						handleSubmit={handleSubmit(onSubmit)}
						control={control}
						isReg={isReg}
						setIsReg={setIsReg}
					/>
				)}
			</View>
		</View>
	);
};
