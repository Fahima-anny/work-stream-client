import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useRoleCheck = () => {

const {user} = useAuth() ;

const axiosSecure = useAxiosSecure() ;
const {data: role ,isPending: roleLoading} = useQuery({
    queryKey: [user?.email, 'role'],
    queryFn: async () => {
        const res = await axiosSecure.get(`/users/role/${user?.email}`) ;
        // console.log(user?.email);
        console.log(res);
        return res.data ;
    },
    enabled: !!user?.email
})
console.log(role);
    return [role, roleLoading] ;
};

export default useRoleCheck;