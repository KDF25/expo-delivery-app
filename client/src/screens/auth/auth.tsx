import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Text, View } from "react-native";

import { useAuthMutations } from "@/shared/hooks";
import { Loader } from "@/shared/ui";

import { IAuthFormData } from "@/entities/auth";

import { AuthForm } from "@/widgets/auth-form";

export const Auth: FC = () => {
	const [isReg, setIsReg] = useState(false);

	const { handleSubmit, reset, control } = useForm<IAuthFormData>({
		mode: "onChange"
	});

	const { isLoading, registerSync, loginSync } = useAuthMutations(reset);

	const onSubmit: SubmitHandler<IAuthFormData> = (data) => {
		if (isReg) registerSync(data);
		else loginSync(data);
	};

	return (
		<View className="items-center justify-center h-full mx-2">
			<View className="w-9/12">
				<Text className="mb-8 text-3xl font-medium text-center text-black">
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
