// import { useContext } from "react";
// import { AuthContext } from "./AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {

const {loading, user} = useAuth() ;
const location = useLocation() ;

if(loading){
return <div className="min-h-[80vh] flex justify-center items-center">
 <span className="loading loading-dots loading-lg"></span>
</div>
}

if(user){
    return children ;
}

return <Navigate to='/login' state={location?.pathname}></Navigate>


};

export default PrivateRoute;