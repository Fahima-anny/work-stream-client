import useAuth from "../../../Hooks/useAuth";



const WorkSheet = () => {

    const {user} = useAuth() ;

const handleSubmit = e => {
    e.preventDefault() ;
    const form = e.target ;
    const task = form.task.value ;
    const hoursWorked = form.hoursWorked.value ;
    console.log(task, hoursWorked);
    const workSheetData = {
        task , hoursWorked, email: user.email , date: 
    }
}

    return (
        <div className="">
           <h1 className=""></h1>
                      <div className="">
                       <h1 className="my-5 text-center text-2xl md:text-4xl font-bold font-serif">Work Sheet</h1>
                      </div>

<div>
    <form onSubmit={handleSubmit} >
          <label className="label">
            <span className="label-text font-medium">Add a New Work Query</span>
          </label>
        <div className="grid md:grid-cols-5 gap-3">
    <div className="form-control col-span-2">
    <select required defaultValue='Select Your Task' className="select select-bordered w-full " name="task">
                                <option disabled value="Select Your Task">Select Your Task</option>
                                <option value="Sales">Sales</option>
                                <option value="Support">Support</option>
                                <option value="Content"> Content</option>
                                <option value="Marketing">Marketing </option>
                                <option value="Paper Work">Paper Work</option>
                            </select>
        </div>
    <div className="form-control col-span-2">
          <input type="number" name="hoursWorked" placeholder="Hours Worked" className="input input-bordered" required />
        </div>
        <input type="submit" value="Submit" className="btn bg-blue-100 hover:bg-blue-200 duration-300 text-blue-700"/>
        </div>
    </form>
</div>

        </div>
    );
};

export default WorkSheet;