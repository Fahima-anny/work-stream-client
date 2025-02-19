import { FaUsers, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import CountUp from "react-countup";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const OverviewHR = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: usersData = [], isLoading: usersDataLoading } = useQuery({
    queryKey: ["allUsersData"],
    queryFn: async () => {
      const response = await axiosSecure.get(`/users`);
      return response.data;
    },
  });

  const { data: allEmployee = [], isLoading: allEmployeeLoading } = useQuery({
    queryKey: ["allEmployeeProgress"],
    queryFn: async () => {
      const res = await axiosSecure.get("/work-sheet");
      return res.data;
    },
  });

  // Group total hours worked per task
  const taskHours = allEmployee.reduce((acc, entry) => {
    const { task, hoursWorked } = entry;
    acc[task] = (acc[task] || 0) + Number(hoursWorked);
    return acc;
  }, {});

  // Convert task-wise data into an array for the chart
  const chartData = Object.entries(taskHours).map(([task, totalHours]) => ({
    task,
    totalHours,
  }));

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="navbar bg-base-100 mb-8">
        <div className="flex-1">
          <h1 className="text-2xl font-bold">Welcome, {user.displayName}</h1>
        </div>
        <div className="flex-none gap-4">
          <Link to="/dashboard/profile">
            <img
              className="h-12 w-12 object-cover object-center rounded-full border border-accent"
              src={user.photoURL}
              alt="Profile"
            />
          </Link>
        </div>
      </div>

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

      <div className="grid grid-cols-1 gap-6">
        <div className="card bg-base-100 border border-gray-400">
          <div className="card-body">
            <h2 className="card-title mb-4">Work Hours by Task</h2>
            {allEmployeeLoading ? (
              <span className="loading loading-dots loading-lg"></span>
            ) : (
                <ResponsiveContainer width="100%" height={400}>
                <BarChart data={chartData}>
                  <XAxis dataKey="task" angle={-30} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="totalHours" fill="#4CAF50" />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewHR;
