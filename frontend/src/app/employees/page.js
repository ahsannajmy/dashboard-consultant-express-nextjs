"use client";

import Link from "next/link";
import { DashboardLayout } from "../components/dashboardLayout";
import { AddIcon } from "./components/employeesIcon";
import { EmployeeTable } from "./components/employeeTable";
import { useEffect, useState } from "react";
import { fetchData } from "../handler/apiHandler";

export default function EmployeePage() {
  const [employeeData, setEmployeeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalEmployees, setTotalEmployee] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchEmployeePagination(page);
  }, []);

  async function fetchEmployeePagination(page) {
    try {
      const employee = await fetchData(`/employees/?page=${page}`, "GET");
      const formattedEmployee = employee.data.map((emp) => ({
        ...emp,
        izin_berlaku_pengacara: formatDate(emp.izin_berlaku_pengacara),
        izin_berlaku_konsultan: formatDate(emp.izin_berlaku_konsultan),
      }));
      setEmployeeData(formattedEmployee);
      console.log(formattedEmployee);
      setTotalEmployee(employee.pagination.totalItems);
      setTotalPage(employee.pagination.totalPages);
      setPage(employee.pagination.currentPage);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  function formatDate(dateString) {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", options);
  }

  return (
    <>
      <DashboardLayout>
        <div className="flex flex-col gap-4">
          <span className="text-4xl font-bold">List of Employees</span>
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold">{`* ${totalEmployees} employees working right now at your team`}</span>
            <Link
              className="p-2 rounded-lg flex items-center flex-row gap-2 bg-button1 text-secondary max-w-fit"
              href="/employees/add"
            >
              <AddIcon className="h-5 w-5" />
              <span>Add Employees</span>
            </Link>
          </div>
          <EmployeeTable
            data={employeeData}
            loadingState={isLoading}
            page={page}
            totalPage={totalPage}
            changePageHandler={(page) => fetchEmployeePagination(page)}
          />
        </div>
      </DashboardLayout>
    </>
  );
}
