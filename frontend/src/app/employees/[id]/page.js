"use client";

import { fetchData } from "@/app/handler/apiHandler";
import { DashboardLayout } from "@/app/layout/dashboardLayout";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Spinner } from "@nextui-org/spinner";
import { EmployeeDetailForm } from "../components/employeeDetailForm";
import { ArrowPrevIcon } from "@/app/components/generalIcon";
import { MainLinkButton } from "@/app/components/button";
import { EmployeeDetail } from "../components/employeeDetail";

export default function EmployeeDetailPage() {
  const [employeeDetail, setEmployeeDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetchEmployeeDetails();
  }, []);

  async function fetchEmployeeDetails() {
    try {
      const data = await fetchData(`employees/${id}`, "GET");

      setEmployeeDetail(data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <DashboardLayout>
        <div className="flex flex-col gap-4">
          <MainLinkButton href="/employees">
            <ArrowPrevIcon className="w-5 h-5" />
          </MainLinkButton>
          <span className="text-2xl font-bold">
            {isLoading ? <Spinner /> : employeeDetail.nama}
          </span>
          {isLoading ? <Spinner /> : <EmployeeDetail detail={employeeDetail} />}
          <EmployeeDetailForm />
        </div>
      </DashboardLayout>
    </>
  );
}
