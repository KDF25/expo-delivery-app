import { FieldValues, RegisterOptions } from "react-hook-form";

import { IProfileFormData } from "@/entities/user";

export interface IProfileFormField extends FieldValues {
	title: string;
	name: keyof IProfileFormData;
	rules?: Omit<
		RegisterOptions<IProfileFormData>,
		"setValueAs" | "disabled" | "valueAsNumber" | "valueAsDate"
	>;
}
