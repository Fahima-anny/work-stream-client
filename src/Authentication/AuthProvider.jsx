/* eslint-disable react/prop-types */
import { AuthContext } from "./AuthContext";

const AuthProvider = ({children}) => {


    const authInfo = {

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;