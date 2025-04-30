import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Image, Text, View } from "react-native";

import { useAuth } from "@/shared/hooks";
import { Button, Heading } from "@/shared/ui";

import { AuthService } from "@/entities/auth";
import {
	IProfileFormData,
	useProfile,
	useUpdateProfile
} from "@/entities/user";

import { Layout } from "@/widgets/layout";
import { ProfileForm } from "@/widgets/profile-form";

export const Profile: FC = () => {
	const { setUser } = useAuth();
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const { mutate } = useUpdateProfile();

	const { profile } = useProfile();

	const { handleSubmit, control } = useForm<IProfileFormData>({
		mode: "onChange",
		defaultValues: {
			name: profile?.name,
			email: profile?.email,
			phone: profile?.phone,
			avatarPath: profile?.avatarPath
		}
	});

	const onSubmit: SubmitHandler<IProfileFormData> = (data) => {
		console.log(data);
		setIsEdit(false);
		mutate(data);
		console.log("end");
	};

	return (
		<Layout>
			<Heading isCenter>Profile</Heading>

			<View className="items-center justify-center my-6">
				<Image
					source={{ uri: profile?.avatarPath }}
					className="w-40 h-40 rounded-full"
				/>
			</View>
			<Text className="mb-2 text-2xl font-bold text-center">
				Welcome back, {profile?.name} 👋
			</Text>
			<Text className="mb-6 text-center text-gray-500">
				Here’s your profile information
			</Text>

			<ProfileForm control={control} isEdit={isEdit} />

			{!isEdit ? (
				<View className="justify-between flex-1 mt-4 mb-8 gap-y-5">
					<Button onPress={() => setIsEdit(true)} className="w-full">
						Edit
					</Button>
					<Button
						onPress={() =>
							AuthService.logout().then(() => setUser(null))
						}
						className="w-full bg-red-600"
					>
						Logout
					</Button>
				</View>
			) : (
				<View className="flex-row gap-5 mt-4 ">
					<Button
						onPress={() => setIsEdit(false)}
						style={{ flexGrow: 1, flexBasis: 100 }}
					>
						Back
					</Button>
					<Button
						onPress={handleSubmit(onSubmit)}
						style={{ flexGrow: 1, flexBasis: 100 }}
					>
						Save
					</Button>
				</View>
			)}
		</Layout>
	);
};
