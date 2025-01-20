import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://work-stream-12.vercel.app"
})

const useAxiosPublic = () => {
    return axiosPublic ;
};

export default useAxiosPublic;