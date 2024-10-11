"use client";

import { useContext } from "react";
import { DashboardLayout } from "./components/dashboardLayout";
import { UserIcon } from "./components/generalIcon";
import { AuthContext } from "./context/authContext";
import Link from "next/link";

export default function Home() {
  const { userData } = useContext(AuthContext);
  return (
    <>
      <DashboardLayout>
        <div className="flex flex-col gap-4">
          <div className="bg-secondary/80 drop-shadow-lg rounded-lg w-full p-4">
            <div className="flex items-center justify-between text-primary">
              <div className="flex flex-row gap-2 items-center">
                <span className="font-semibold">{userData.nama}</span>
                <div className="rounded-lg py-1 px-2 bg-button1 text-secondary text-sm">
                  <span>{userData.role}</span>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <Link href="/">
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
