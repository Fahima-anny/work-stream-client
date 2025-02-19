import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useHR = () => {

const {user} = useAuth() ;
const axiosSecure = useAxiosSecure() ;
const {data: isHR ,isPending: isHRLoading} = useQuery({
    queryKey: [user?.email, 'isHR'],
    queryFn: async () => {
        const res = await axiosSecure.get(`/users/role/${user?.email}`) ;
        // console.log(res.data);
        return res.data?.hr ;
    }
})
    return [isHR, isHRLoading] ;
};

export default useHR;