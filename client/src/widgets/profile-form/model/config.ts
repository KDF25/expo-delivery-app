import { validateEmail } from "@/shared/utils";

import { IProfileFormField } from "./types";

export const PROFILE_FORM_FIELD_LIST: IProfileFormField[] = [
	{
		title: "Name",
		placeholder: "Enter your name",
		name: "name",
		rules: {
			required: "Name is required",
			minLength: {
				value: 3,
				message: "Password must be at least 3 characters long"
			}
		}
	},
	{
		title: "Email",
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
		title: "Phone",
		placeholder: "Enter your phone",
		name: "phone",
		keyboardType: "phone-pad"
		// rules: {
		//     required: "Password is required",
		//     minLength: {
		//         value: 6,
		//         message: "Password must be at least 6 characters long"
		//     }
		// }
	}
];
