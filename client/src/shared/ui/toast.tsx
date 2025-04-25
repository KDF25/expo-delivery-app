import { FC } from "react";
import RnToast, { BaseToast } from "react-native-toast-message";

import { COLORS } from "../config";

const options = (primaryColor: string) => ({
	style: { backgroundColor: "#080808", borderLeftColor: primaryColor },
	text1Style: {
		color: "#fff",
		fontSize: 16
	},
	text2Style: {
		fontSize: 14
	}
});

export const Toast: FC = () => {
	return (
		<RnToast
			topOffset={50}
			config={{
				success: (props) => (
					<BaseToast
						{...props}
						{...options(COLORS.primary.DEFAULT)}
					/>
				),
				info: (props) => (
					<BaseToast {...props} {...options("#65d4ff")} />
				),
				error: (props) => (
					<BaseToast {...props} {...options("#ff4949")} />
				)
			}}
		/>
	);
};
