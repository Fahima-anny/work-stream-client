import Lottie from "lottie-react";
import Animation from "../../../public/Animation - 1739924690361.json";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {

    const navigate = useNavigate() ;
    const handleGoHome = () => {
        navigate("/")
    }

    return (
        <div className='flex flex-col justify-center items-center min-h-screen '>
  <h1 className="font-bold font-serif text-5xl text-center pb-3 ">404 : Page Not Found</h1>
  <h1 className="font-bold font-serif text-2xl text-center pt-3 text-gray-500">The page you are trying to access is not found</h1>
            <Lottie
            className="h-[50vh] py-10"
            animationData={Animation} loop={true} />
           
          

<button
onClick={handleGoHome}
className="btn border-4">Go Home</button>

</div>
    );
};

export default ErrorPage;