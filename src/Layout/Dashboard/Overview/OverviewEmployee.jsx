import { FaUserTie, FaTasks } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import CountUp from "react-countup";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useUserWorkSheet from "../../../Hooks/useUserWorkSheet";

export const OverviewEmployee = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [userWorkSheet, userWorkPending] = useUserWorkSheet();

  console.log(userWorkSheet);

  const { data: paymentHistory, isPending: paymentHistoryLoading } = useQuery({
    queryKey: ['paymentHistory2'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payroll/${user?.email}`);
      console.log("response paisi", res.data);
      return res.data;
    }
  });

  const totalSalaryPaid = paymentHistory?.data?.reduce((total, entry) => total + Number(entry.salary), 0) || 0;

  console.log("Total Salary Paid:", totalSalaryPaid);

  const totalHoursWorked = userWorkSheet.reduce((total, entry) => total + Number(entry.hoursWorked), 0);

  console.log("Total Hours Worked:", totalHoursWorked);

  // Aggregate hours worked per task
  const taskHoursData = userWorkSheet.reduce((acc, entry) => {
    const existingTask = acc.find(task => task.task === entry.task);
    if (existingTask) {
      existingTask.hoursWorked += Number(entry.hoursWorked);
    } else {
      acc.push({ task: entry.task, hoursWorked: Number(entry.hoursWorked) });
    }
    return acc;
  }, []);

  if (paymentHistoryLoading || userWorkPending) {
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
          <h1 className="text-2xl font-bold">Welcome, {user.displayName}</h1>
        </div>
        <div className="flex-none gap-4">
          <Link to="/dashboard/profile">
            <img 
              className="h-12 w-12 object-cover object-center rounded-full border border-accent"
              src={user.photoURL} alt="Profile" />
          </Link>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
        <div className="stats border border-gray-400">
          <div className="stat">
            <div className="stat-figure text-primary">
              <FaTasks className="text-3xl text-blue-400" />
            </div>
            <div className="stat-title">Total Working Hours</div>
            <div className="stat-value">
              <CountUp start={0} end={totalHoursWorked} duration={2} />
            </div>
            <div className="stat-desc">Updated regularly</div>
          </div>
        </div>

        <div className="stats border border-gray-400">
          <div className="stat">
            <div className="stat-figure text-blue-400">
              <FaUserTie className="text-3xl" />
            </div>
            <div className="stat-title">Total salary</div>
            <div className="stat-value">
              <CountUp start={0} end={totalSalaryPaid} duration={2} />
            </div>
            <div className="stat-desc">Great job!</div>
          </div>
        </div>
      </div>

      {/* Charts and Main Content */}
      <div className="grid grid-cols-1 gap-6">
        {/* Task Hours Worked Chart */}
        <div className="">
          <div className="card bg-base-100 border border-gray-400">
            <div className="card-body">
              <h2 className="card-title mb-4">Hours Worked Per Task</h2>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={taskHoursData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="task" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="hoursWorked" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewEmployee;
