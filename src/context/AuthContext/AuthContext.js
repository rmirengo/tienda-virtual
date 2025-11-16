import { createContext } from "react";

export const AuthContext = createContext({
    user:null,
    login:()=>{
        console.error("useAuthContext() usado sin <AuthProvider>.");
        return false;
    }
});
