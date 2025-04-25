import { FieldValues, RegisterOptions } from "react-hook-form";

import { IAuthFormData } from "@/entities/auth";

export interface IAuthFormField extends FieldValues {
	name: keyof IAuthFormData;
	rules?: Omit<
		RegisterOptions<IAuthFormData, "email" | "password">,
		"setValueAs" | "disabled" | "valueAsNumber" | "valueAsDate"
	>;
}
