import { Helmet } from "react-helmet-async";


const EmployeeList = () => {
    return (
        <div>

            <Helmet>
                <title>Work Stream | Employee List</title>
            </Helmet>

            <h1 data-aos="fade-left" className="my-5 text-center text-2xl md:text-4xl font-bold font-serif"> Employee List </h1>
            
        </div>
    );
};

export default EmployeeList;