import { FcGoogle } from "react-icons/fc";
import { MdLogin } from "react-icons/md";
import { Link } from "react-router-dom";


const Register = () => {

const handleSignUp = e => {
    e.preventDefault() ;
    const form = e.target ;
    const email = form.email.value ;
    const pass = form.pass.value ;
    const name = form.name.value ;
    const photo = form.photo.value ;
    // console.log(email, pass, name, photo);
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
if(!regex.test(pass)){
// toast.error("Your Password must contain at least 1 uppercase, 1 lowercase, 1 digit, 6 characters")
Swal.fire({
    title: "Weak Password",
    text: "Your Password must contain at least 1 uppercase, 1 lowercase, 1 digit, 6 characters",
    icon: "error"
  });
return
}


}

    return (
        <div className="max-w-screen-xl mx-auto pt-36 pb-20">
           

           <div data-aos="fade-right" className="card py-5 bg-base-100 w-full max-w-3xl mx-auto shadow-xl shadow-base-300">
        <a className=" text-center font-bold text-3xl font-serif">Work<span className="text-blue-500">Stream</span></a>
            <h2 className="text-gray-400 text-center mt-2">Create a new account</h2>
           <form onSubmit={handleSignUp} className="card-body">
   
      {/* name , photo   */}
<div className="grid md:grid-cols-2 gap-4">
<div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="url" placeholder="" name="photo" className="input input-bordered" required />
        </div>
</div>
   
      {/* email , pass  */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="" name="pass" className="input input-bordered" required />
        </div>
</div>
   
      {/* Bank  , salary  */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Bank Account No.</span>
          </label>
          <input type="number" placeholder="" name="bankAcc" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Salary</span>
          </label>
          <input type="number" placeholder="" name="salary" className="input input-bordered" required />
        </div>
        </div>
   
      {/* role  , designation  */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Role</span>
          </label>
          <select required defaultValue='default' className="select select-bordered w-full max-w-xs">
  <option disabled value="default" name="role" className="">Select Your Role</option>
  <option value="Employee">Employee</option>
  <option value="HR (Human Resource)">HR (Human Resource)</option>
</select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Salary</span>
          </label>
          <select required defaultValue='default' className="select select-bordered w-full max-w-xs">
  <option disabled value="default" name="designation" className="">Select Your Designation</option>
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