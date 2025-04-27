import { FC } from "react";
import { Image, View } from "react-native";

import { useAuth } from "@/shared/hooks";
import { Button, Heading } from "@/shared/ui";

import { AuthService } from "@/entities/auth";
import { useProfile } from "@/entities/user";

import { Layout } from "@/widgets/layout";

export const Profile: FC = () => {
	const { setUser } = useAuth();

	const { profile } = useProfile();

	return (
		<Layout>
			<Heading isCenter>Profile</Heading>

			<View className="items-center justify-center my-6">
				<Image
					source={{ uri: profile?.avatarPath }}
					className="w-40 h-40 rounded-full"
				/>
			</View>

			<Button
				onPress={() => AuthService.logout().then(() => setUser(null))}
				className="mt-5"
			>
				Logout
			</Button>
		</Layout>
	);
};
