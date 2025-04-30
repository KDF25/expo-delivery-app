import { FC } from "react";
import { Text, View } from "react-native";

import { IUser } from "../types";

import { UserInfoRow } from "./user-info-row";

interface IUserInfoProps {
	profile: IUser | undefined;
}

export const UserInfo: FC<IUserInfoProps> = ({ profile }) => {
	return (
		<View className="mb-4 gap-y-4">
			<UserInfoRow title="Name" value={profile?.name} />
			<UserInfoRow title="Email" value={profile?.email} />
			<UserInfoRow title="Phone" value={profile?.phone} />
		</View>
	);
};
