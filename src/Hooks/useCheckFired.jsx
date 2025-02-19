import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCheckFired = (email) => {

// console.log("dekhi toh ",email);
const axiosPublic = useAxiosPublic() ;

const {data: isActiveData, isLoading: activeDataLoading} = useQuery({
    queryKey: ['checkAccount'],
    queryFn: async () => {
     const res =await axiosPublic.get(`/users/fired?email=${email}`)
    //  console.log(res.data);
     return res.data ;
    }
})

return { isActiveData, activeDataLoading }
};

export default useCheckFired;