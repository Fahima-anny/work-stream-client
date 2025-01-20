import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: "https://work-stream-12.vercel.app"
})

const useAxiosSecure = () => {

    const navigate = useNavigate() ;
    const {signOutUser} = useAuth() ;

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem("access-token")
        // console.log("req stop by interceptor");
        config.headers.authorization = `Bearer ${token}`
        return config;
    },
        function (error) {
            return Promise.reject(error);
        })

        // interceptors 401 , 403 status 
        axiosSecure.interceptors.response.use(function (response) {
            return response ;
        } ,  async (error) => {
            const status = error.response.status ;
// console.log("status error in interceptor", status);
if(status === 401 || status === 403){
     signOutUser()
     .then(() => {
        console.log("kala vai sada hoye asen");
     })
navigate("/login")
}
            return Promise.reject(error); 
        }
    )

    return axiosSecure;
};

export default useAxiosSecure;