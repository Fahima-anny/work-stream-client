/* eslint-disable react/no-unescaped-entities */
import { FcGoogle } from "react-icons/fc";
import { MdLogin } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
// import useCheckFired from "../../Hooks/useCheckFired";
import Swal from "sweetalert2";
// import { useQuery } from "@tanstack/react-query";

const Login = () => {

  useEffect(() => {
    AOS.init({
      duration: 2500,
      once: true,
      offset: 100,
    });
  }, []);

    const {loginUser, googleLogin, user} = useAuth() ;
    const axiosPublic = useAxiosPublic() ;
const navigate = useNavigate() ;
const location = useLocation() ;
const destination = location?.state || '/' ;
// const [emailCheck, setEmailCheck] = useState(null) ;

// const {data: isActiveData, isPending: activeDataLoading} = useQuery({
//   queryKey: ['checkAccount'],
//   queryFn: async () => {
//    const res =await axiosPublic.get(`/users/fired?email=${emailCheck}`)
//    console.log("bal",res.data.isActive);
//    return res.data.isActive ;
//   },
//   enabled: !!emailCheck
// })

const handleLogin =async e => {
    e.preventDefault() ;
    const form = e.target ;
    const email = form.email.value ;
    const pass = form.pass.value ;
    console.log(email, pass);
// setEmailCheck(email)

const res = await axiosPublic.get(`/users/fired?email=${email}`)
const isActive = res.data.isActive ;


if (isActive === false) {
  Swal.fire({
    icon: "error",
    title: "You are fired",
    text: "Your account has been disabled by the admin",
    showConfirmButton: false,
    timer: 2500,
  });
  form.reset() ;
  return;
}
if(isActive === true){
      // login user 
      loginUser(email, pass)
      .then(res => {
        // console.log(res.user);
        toast.success(`Welcome ${res?.user?.displayName}`)
        navigate(destination) ;
        form.reset() ;
      })
      .catch(er => {
        console.log(er);
        toast.error(er.message.replace("Firebase:", "").trim())
      })
    }
}


const handleGoogleLoginPopup = () => {
  
// first do google login
googleLogin()
.then(res => {
  console.log(res.user)
const userInfo = {
  email: res.user.email,
  name: res.user.displayName
}
axiosPublic.post("/users",userInfo)
.then(response => {
  console.log(response.data);

  //  if he is not in userDB it will insert and open profile update modal 
  if(response.data.insertedId){
  document.getElementById('my_modal_5').showModal()
  }
  else{
      toast.success(`Welcome ${res.user.displayName}`)
    navigate(destination)
  }
})
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
  document.getElementById('my_modal_5').close() ;
  form.reset() ;
  navigate(destination) ;
  toast.success(`Welcome ${user?.displayName}`)
})
.catch(er => {
  console.log(er);
})
}

// const handleClosePopup = () => {
//   document.getElementById('my_modal_5').close() ;
// }

    return (
        <div className="max-w-screen-xl mx-auto pt-36 pb-20">
              <Helmet>
                            <title>Work Stream | Login</title>
                        </Helmet>
            
            <div data-aos="fade-left" className="card py-3 bg-base-100 w-full max-w-md mx-auto shadow-xl shadow-base-300">
        <a className=" text-center font-bold text-3xl font-serif">Work<span className="text-blue-500">Stream</span></a>
            <h2 className="text-gray-400 text-center mt-2">Login with your account</h2>
           <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="pass" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-blue-500 text-white hover:text-black hover:bg-blue-500 duration-500 "><MdLogin className="text-2xl" />Login</button>
          <div className="divider">or</div>
          <button 
          onClick={handleGoogleLoginPopup} 
          className="btn duration-500"><FcGoogle className="text-2xl" />Login with Google</button>
        </div>
        <p className="text-center">Don't have an account? <Link to='/register' className="text-blue-500 font-semibold underline hover:text-black duration-500">Register</Link></p>
      </form>
           </div>

{/* Open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button> */}
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
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

export default Login;