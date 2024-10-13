"use client";

import { DashboardLayout } from "@/app/layout/dashboardLayout";

import { EmployeeExcelForm, EmployeeForm } from "../components/employeeForm";

import { formRequeest } from "@/app/handler/apiHandler";

export default function EmployeeAdd() {
  async function addEmployeeHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    try {
      await formRequeest("/employees", "POST", JSON.stringify(formObject));
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <EmployeeForm submitHandler={(e) => addEmployeeHandler(e)} />
        <EmployeeExcelForm />
      </div>
    </DashboardLayout>
  );
}
