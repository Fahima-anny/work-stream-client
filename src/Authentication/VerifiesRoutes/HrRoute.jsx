/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useRoleCheck from "../../Hooks/useRoleCheck";

const HrRoute = ({children}) => {

    const [role, roleLoading] = useRoleCheck() ;
    const {loading, user, signOutUser} = useAuth() ;

    if(loading || roleLoading){
        return <div className="min-h-[80vh] flex justify-center items-center">
     <span className="loading loading-dots loading-lg"></span>
    </div>
    }
    
    if(user && role === "HR"){
        return children ;
    }
     
    signOutUser()
    .then(() => {
        // console.log("kala vai tumi sada hoye aso");
    })
    return <Navigate to='/login'></Navigate>
    
};

export default HrRoute;