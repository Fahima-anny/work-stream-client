import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthContext";


const useAuth = () => {
    const context = useContext(AuthContext) ;
    return context ;
};

export default useAuth;