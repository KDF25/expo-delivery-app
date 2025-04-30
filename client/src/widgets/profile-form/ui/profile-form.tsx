import { FC } from "react";
import { Control } from "react-hook-form";
import { Text, View } from "react-native";

import { Field } from "@/shared/ui";

import { IProfileFormData } from "@/entities/user";

import { PROFILE_FORM_FIELD_LIST } from "../model";

interface IProfileFormProps {
	control: Control<IProfileFormData>;
	isEdit?: boolean;
}

export const ProfileForm: FC<IProfileFormProps> = ({ control, isEdit }) => {
	return (
		<View className="gap-y-4">
			{PROFILE_FORM_FIELD_LIST.map(({ title, ...field }, index) => (
				<View key={index}>
					<Text className="mb-1 text-sm text-gray-500 ">{title}</Text>
					<Field<IProfileFormData>
						control={control}
						editable={isEdit}
						{...field}
					/>
				</View>
			))}
		</View>
	);
};
