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

import { getAccessToken, getUserFromStorage } from "@/entities/auth";
import { IUser } from "@/entities/user";

export type TypeUserState = IUser | null;

interface IAuthContext {
	user: TypeUserState;
	setUser: Dispatch<SetStateAction<TypeUserState>>;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

let ignore = SplashScreen.preventAutoHideAsync();

export const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [user, setUser] = useState<TypeUserState>(null);

	useEffect(() => {
		let isMounted = true;

		const checkAccessToken = async () => {
			try {
				const accessToken = await getAccessToken();

				if (accessToken) {
					const user = await getUserFromStorage();
					if (isMounted) {
						setUser(user);
					}
				}
			} catch {
			} finally {
				await SplashScreen.hideAsync();
			}
		};

		let ignore = checkAccessToken();

		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};
