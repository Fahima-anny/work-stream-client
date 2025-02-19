
import { FaUsers, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import CountUp from "react-countup";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const OverviewAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: usersData = [], isLoading: usersDataLoading } = useQuery({
    queryKey: ["allUsersData"],
    queryFn: async () => {
      const response = await axiosSecure.get(`/users`);
      return response.data;
    },
  });

  const { data: allVerifiedEmployee, isLoading: allVerifiedEmployeeLoading } = useQuery({
    queryKey: ["allEmployee"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/verified`);
      return res.data;
    }
  });

  const formattedEmployeeData = allVerifiedEmployee?.map(employee => ({
    name: employee.name,  
    salary: employee.salary, 
  }));


  if (usersDataLoading || allVerifiedEmployeeLoading) {
    return (
        <div className="min-h-[80vh] flex justify-center items-center">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    );
}


  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Navigation */}
      <div className="navbar bg-base-100 mb-8">
        <div className="flex-1">
          <h1 className="text-2xl font-bold">Fahima Akter (CEO)</h1>
        </div>
        <div className="flex-none gap-4">
          <Link to="/dashboard/profile">
            <img 
              className="h-12 w-12 object-cover object-center rounded-full border border-accent"
              src={user.photoURL} alt="" />
          </Link>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
        <div className="stats border border-gray-400">
          <div className="stat">
            <div className="stat-figure text-primary">
              <FaUsers className="text-3xl text-blue-400" />
            </div>
            <div className="stat-title">Total Employees</div>
            <div className="stat-value">
              {usersData.length === 0 ? (
                <span>Loading...</span>
              ) : (
                <CountUp start={0} end={usersData.length} duration={2} />
              )}
            </div>
            <div className="stat-desc">↗︎ 12 (2%)</div>
          </div>
        </div>

        <div className="stats border border-gray-400">
          <div className="stat">
            <div className="stat-figure text-blue-400">
              <FaChartLine className="text-3xl" />
            </div>
            <div className="stat-title">Departments</div>
            <div className="stat-value">
              <CountUp start={0} end={8} duration={2} />
            </div>
            <div className="stat-desc">↘︎ 2 (1%)</div>
          </div>
        </div>
      </div>

      {/* Charts and Main Content */}
      <div className="grid grid-cols-1 gap-6">
        {/* Employee Chart */}
        <div className="">
          <div className="card bg-base-100 border border-gray-400">
            <div className="card-body">
              <h2 className="card-title mb-4">Employee Distribution</h2>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={formattedEmployeeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="salary" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewAdmin;
