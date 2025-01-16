import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useUserWorkSheet = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: userWorkSheet = [], isPending: userWorkPending , refetch} = useQuery({
        queryKey: [user.email, 'userWorkSheet'],
        queryFn: async () => {
            const result = await axiosSecure.get(`/work-sheet/${user?.email}`) ;
            console.log(result?.data);
            return result?.data
        },
        enabled: !!user?.email
    })

    console.log(userWorkSheet);

    return [userWorkSheet, userWorkPending, refetch]
};

export default useUserWorkSheet;