import * as SplashScreen from "expo-splash-screen";
import {
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	createContext,
	useEffect,
	useState
} from "react";

import { IUser } from "@/entities/user";

export type TypedUserState = IUser | null;

interface IAuthContext {
	user: TypedUserState;
	setUser: Dispatch<SetStateAction<TypedUserState>>;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

let ignore = SplashScreen.preventAutoHideAsync();

export const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [user, setUser] = useState<TypedUserState>({} as IUser);

	useEffect(() => {
		let mounted = true;

		const checkAccessToken = async () => {
			try {
			} catch (e) {
				console.log(e);
			} finally {
				await SplashScreen.hideAsync();
			}
		};

		let ignore = checkAccessToken();

		return () => {
			mounted = false;
		};
	}, []);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};
