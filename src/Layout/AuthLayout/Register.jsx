import { FcGoogle } from "react-icons/fc";
import { MdLogin } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";
import { IoMdCloseCircle } from "react-icons/io";
import { Helmet } from "react-helmet-async";

const img_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`

const Register = () => {

    const { signUp , updateUserInfo, user, googleLogin, signOutUser} = useAuth();
    const navigate = useNavigate() ;
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
    navigate('/') ;
    toast.success(`Welcome ${userInfo?.name}`)
})
                            // setUserName(name)
                            // setUserPhoto(photo)
                        })
                        .catch(er => console.log(er))                    }
                })
                .catch(er => console.log(er))
        }


    }
    
   const handleGoogleLoginPopup = async () => {
     
   // first do google login
   googleLogin()
   .then(async res => {
     console.log(res.user)
   const userInfo = {
     email: res.user.email,
     name: res.user.displayName
   }
   
   const response = await axiosPublic.get(`/users/fired?email=${res.user.email}`)
   const isActive = response.data.isActive ;
   
   
   if (isActive === false) {
     signOutUser()
     .then(() => {
       Swal.fire({
         icon: "error",
         title: "You are fired",
         text: "Your account has been disabled by the admin",
         showConfirmButton: false,
         timer: 2500,
       });
     })
     return;
   }
   if(isActive === true){
         // login user 
         axiosPublic.post("/users",userInfo)
         .then(response => {
           console.log(response.data);
           //  if he is not in userDB it will insert and open profile update modal 
           if(response.data.insertedId){
           document.getElementById('my_modal_5').showModal()
           }
           else{
               toast.success(`Welcome ${res.user.displayName}`)
             navigate('/')
           }
         })
       }
   
   })
   .catch(er => {
     console.log(er)
   })
   }
    
    const handleGoogleLogin = (e) => {
    // update user info in db 
     e.preventDefault() ;
     const form = e.target ;
     const salary = form.salary.value ;
     const designation = form.designation.value ;
     const bankAcc = form.bankAcc.value ;
    //  const employee = form.employee.value ;
     console.log(salary, bankAcc, designation);
    
    const updatedInfo = {
      salary, designation, bankAcc, image:user.photoURL
    }
    
    axiosPublic.put(`/users/${user?.email}`, updatedInfo)
    .then(res => {
      console.log(res.data);
      document.getElementById('my_modal_4').close() ;
      form.reset() ;
      navigate('/') ;
      toast.success(`Welcome ${user?.displayName}`)
    })
    .catch(er => {
      console.log(er);
    })
    }


    return (
        <div className="max-w-screen-xl mx-auto pt-36 pb-20">

 <Helmet>
                            <title>Work Stream | Register</title>
                        </Helmet>

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
         
                    </div>
                    <p className="text-center">Already have an account? <Link to='/login' className="text-blue-500 font-bold underline hover:text-black duration-500">Login</Link></p>
                </form>
                <div className="divider">or</div>
          <button 
          onClick={handleGoogleLoginPopup} 
          className="btn duration-500 mx-8"><FcGoogle className="text-2xl" />Login with Google</button>
            </div>

 {/* modal  */}
<dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box relative">
    <button
    //  onClick={handleClosePopup} 
    className="absolute top-5 right-5 text-3xl text-red-500"><IoMdCloseCircle /></button>
    <h3 className="font-bold text-2xl text-blue-600 text-center">Login With Google</h3>
    <p className="py-4 text-gray-500 text-center">Please complete the form to proceed</p>
    <div className="modal-action">
      <form onSubmit={handleGoogleLogin} method="dialog" className="flex flex-col justify-center w-full gap-3">


        {/* will update after getting marks  */}

                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Role</span>
                            </label>
                            <select required defaultValue='Employee' name="employee" className="select select-bordered w-full">
                                <option value="Employee">Employee</option>
                                <option value="HR">HR</option>
                            </select>
                        </div> */}

      <div className="form-control">
                            <label className="label">
                                <span className="label-text">Designation</span>
                            </label>
                            <select required defaultValue='Sales Assistant' className="select select-bordered w-full " name="designation">
                                <option value="Sales Assistant">Sales Assistant</option>
                                <option value="Social Media executive">Social Media executive</option>
                                <option value="Digital Marketer"> Digital Marketer</option>
                                {/* <option value="HR (Human Resource)">HR </option> */}
                                <option value="Others">Others</option>
                            </select>
                        </div>
      <div className="form-control">
      <label className="label">
            <span className="label-text">Bank Account No.</span>
          </label>
        <input required type="number" className="input input-bordered" name="bankAcc"  />
        </div>
      <div className="form-control">
      <label className="label">
            <span className="label-text">Salary</span>
          </label>
        <input required type="number" name="salary" className="input input-bordered"  />
        </div>
        <button className="btn">Continue</button>
      </form>
    </div>
  </div>
</dialog>

        </div>
    );
};

export default Register;