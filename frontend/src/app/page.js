"use client";

import { useContext } from "react";
import { DashboardLayout } from "./layout/dashboardLayout";
import { UserIcon } from "./components/generalIcon";
import { AuthContext } from "./context/authContext";
import Link from "next/link";
import { Spinner } from "@nextui-org/spinner";
import { Skeleton } from "@nextui-org/skeleton";

export default function Home() {
  const { userData, userDataLoading } = useContext(AuthContext);
  return (
    <>
      <DashboardLayout>
        <div className="flex flex-col gap-4">
          <div className="bg-secondary/80 drop-shadow-lg rounded-lg w-full p-4">
            <div className="flex items-center justify-between text-primary">
              {userDataLoading ? (
                <div className="flex flex-row gap-2 items-center">
                  <Spinner />
                  <Skeleton className="h-7 w-16 rounded-lg" />
                </div>
              ) : (
                <div className="flex flex-row gap-2 items-center">
                  <span className="font-semibold">{userData.nama}</span>
                  <div className="rounded-lg py-1 px-2 bg-button1 text-secondary text-sm">
                    <span>{userData.role}</span>
                  </div>
                </div>
              )}
              <div className="flex flex-row gap-2 items-center">
                <Link href="/change-password">
                  <UserIcon className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
          <span className="text-primary">Halaman utama</span>
        </div>
      </DashboardLayout>
    </>
  );
}
