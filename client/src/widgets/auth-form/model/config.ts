import { validateEmail } from "@/shared/utils";

import { IAuthFormField } from "./types";

export const AUTH_FORM_FIELD_LIST: IAuthFormField[] = [
	{
		placeholder: "Enter your email",
		name: "email",
		keyboardType: "email-address",
		rules: {
			required: "Email is required",
			pattern: {
				value: validateEmail,
				message: "Invalid email address"
			}
		}
	},
	{
		placeholder: "Enter your password",
		name: "password",
		secureTextEntry: true,
		rules: {
			required: "Password is required",
			minLength: {
				value: 6,
				message: "Password must be at least 6 characters long"
			}
		}
	}
];
