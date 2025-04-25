import { useContext } from "react";

import { AuthContext } from "@/shared/app/providers/AuthProvider";

export const useAuth = () => useContext(AuthContext);
