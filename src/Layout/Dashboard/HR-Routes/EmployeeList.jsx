import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import {
  // createColumnHelper,
  useReactTable,
  getCoreRowModel,
} from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 2500,
      once: true,
      offset: 100,
    });
  }, []);

  const { data: usersData = [], isLoading: usersDataLoading, refetch } = useQuery({
    queryKey: ["usersData"],
    queryFn: async () => {
      const response = await axiosSecure.get("/users");
      return response.data;
    },
  });

  const handleDetailsClick = (id) => {
    navigate(`details/${id}`);
  };

  const columns = [
    // {
    //   header: "ID",
    //   accessorKey: "_id",
    // },
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Bank Account No.",
      accessorKey: "bankAcc",
    },
    {
      header: "Salary",
      accessorKey: "salary",
    },
    { id: "details",
      header: "Details",
      cell: ({ row }) => (
        <button
          onClick={() => handleDetailsClick(row.original._id)}
          className="btn btn-primary btn-sm"
        >
          Details
        </button>
      ),
    },
  ];

  const table = useReactTable({
    data: usersData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (usersDataLoading) {
    return (
      <div className="min-h-[80vh] flex justify-center items-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  if (!usersData || usersData.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <Helmet>
        <title>Work Stream | Employee List</title>
      </Helmet>

      <h1
        data-aos="fade-left"
        className="my-5 text-center text-2xl md:text-4xl font-bold font-serif"
      >
        Employee List
      </h1>

      {/* table */}
      <div className="overflow-x-auto p-5">
        <table className="table table-zebra w-full">
          <thead>
           {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder ? null : header.column.columnDef.header}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
          {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>{cell.renderValue()}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
