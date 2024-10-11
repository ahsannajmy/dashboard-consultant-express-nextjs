import Link from "next/link";
import { DashboardLayout } from "../components/dashboardLayout";
import { AddIcon } from "./components/employeesIcon";

export default function EmployeePage() {
  return (
    <>
      <DashboardLayout>
        <Link
          className="p-2 rounded-lg flex items-center flex-row gap-2 bg-button1 text-secondary max-w-fit"
          href="/employees/add"
        >
          <AddIcon className="h-5 w-5" />
          <span>Add Employees</span>
        </Link>
      </DashboardLayout>
    </>
  );
}
