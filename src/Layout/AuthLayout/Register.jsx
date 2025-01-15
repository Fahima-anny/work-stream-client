import { FcGoogle } from "react-icons/fc";
import { MdLogin } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const img_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`

const Register = () => {

    const { signUp , updateUserInfo} = useAuth();
const axiosPublic = useAxiosPublic() ;

  useEffect(() => {
    AOS.init({
      duration: 2500,
      once: true,
      offset: 100,
    });
  }, []);

    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        console.log(data)
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
            ;
        if (!regex.test(data.pass)) {
            Swal.fire({
                title: "Weak Password",
                text: "Your Password must contain at least 1 uppercase, 1 lowercase, 1 digit, 6 characters and 1 special character",
                icon: "error"
            });
            return
        }
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(img_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data"
            }
        })
        console.log(res.data.data.display_url);
        if (res.data.success) {
            signUp(data.email, data.pass)
                .then(response => {
                    console.log(response.user);
                    if(response.user){
                        updateUserInfo({displayName: data.name
                            , photoURL: res.data.data.display_url
                        })
                        .then(() => {
                            console.log("user info updated");

const userInfo = {
    name: data.name,
    email: data.email,
    image: res.data.data.display_url,
    bankAcc: data.bankAcc,
    salary: data.salary,
    designation: data.designation,
    role: data.role,
    isVerified: false,
    isActive: true
}
axiosPublic.post("/users", userInfo)
.then(res => {
    console.log(res.data);
})


                            // setUserName(name)
                            // setUserPhoto(photo)
                            // navigate('/') ;
                                //   toast.success(`Welcome ${res?.user?.displayName}`)
                        })
                        .catch(er => console.log(er))                    }
                })
                .catch(er => console.log(er))
        }


    }


    return (
        <div className="max-w-screen-xl mx-auto pt-36 pb-20">

            <div data-aos="fade-left" className="card py-5 bg-base-100 w-full max-w-3xl mx-auto shadow-xl shadow-base-300">
                <a className=" text-center font-bold text-3xl font-serif">Work<span className="text-blue-500">Stream</span></a>
                <h2 className="text-gray-400 text-center mt-2">Create a new account</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                    {/* name , photo   */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="file"  {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                        </div>
                    </div>

                    {/* email , pass  */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"  {...register("email", { required: true })} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"  {...register("pass", { required: true })} className="input input-bordered" required />
                        </div>
                    </div>

                    {/* Bank  , salary  */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Bank Account No.</span>
                            </label>
                            <input type="number"  {...register("bankAcc", { required: true })} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Salary</span>
                            </label>
                            <input type="number"  {...register("salary", { required: true })} className="input input-bordered" required />
                        </div>
                    </div>

                    {/* role  , designation  */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Role</span>
                            </label>
                            <select required defaultValue='Employee'  {...register("role", { required: true })} className="select select-bordered w-full max-w-xs">
                                <option value="Employee">Employee</option>
                                <option value="HR">HR</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Designation</span>
                            </label>
                            <select required defaultValue='Sales Assistant'  {...register("designation", { required: true })} className="select select-bordered w-full max-w-xs">
                                <option value="Sales Assistant">Sales Assistant</option>
                                <option value="Social Media executive">Social Media executive</option>
                                <option value="Digital Marketer"> Digital Marketer</option>
                                <option value="HR (Human Resource)">HR </option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn bg-blue-500 text-white hover:text-black hover:bg-blue-500 duration-500 "><MdLogin className="text-2xl" />Register</button>
                        <div className="divider">or</div>
                        <button
                            //   onClick={handleGoogleLogin}
                            className="btn btn-outline duration-500"><FcGoogle className="text-2xl" />Login with Google</button>
                    </div>
                    <p className="text-center">Already have an account? <Link to='/login' className="text-blue-500 font-bold underline hover:text-black duration-500">Login</Link></p>
                </form>
            </div>

        </div>
    );
};

export default Register;