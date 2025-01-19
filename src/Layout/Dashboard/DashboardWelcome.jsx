/* eslint-disable react/no-unescaped-entities */
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const DashboardWelcome = () => {

const {user} = useAuth() ;
const axiosSecure =useAxiosSecure() ;
console.log(user);

const { data: currentUser, isLoading: currentUserLoading } = useQuery({
    queryKey: ["currentUser"],
    queryFn: async () => {
        const res = await axiosSecure.get(`/users/role/${user.email}`)
        console.log(res.data);
        return res.data;
    },
    
})
console.log(currentUser);

if (currentUserLoading) {
    return (
        <div className="min-h-[80vh] flex justify-center items-center">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    );
}

    return (
        <div className="flex flex-col gap-5 justify-center items-center">

<img 
className="h-40 w-40 object-cover object-center rounded-full"
src={user.photoURL} alt="" />

{/* 
<a className="md:text-2xl rounded-tl-xl rounded-br-xl py-1 px-1 md:px-3 border-l-4 border-l-blue-600 mx-auto border-b-4 border-b-blue-600  font-serif bg-black"><span className="font-semibold text-white">Work</span><span className="text-blue-600 font-black">Stream</span></a> */}

           <h1 className="text-7xl font-bold text-blue-600 text-center"> {user?.displayName} </h1>

           <h1 className="text-4xl font-bold text-center"> ({currentUser}) </h1>

           <h1 className="text-xl  text-gray-500 text-center max-w-4xl mx-auto">Welcome to the dashboard! This is your central hub for managing tasks, accessing essential tools, and staying updated. Whether you're overseeing operations, handling HR, or focusing on your responsibilities, everything you need is right here. Let's achieve great things together!
           </h1>
           <span className="italic text-black font-semibold"> --Welcome-- </span>  





        </div>
    );
};

export default DashboardWelcome;