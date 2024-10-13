"use client";

import { useContext } from "react";
import { DashboardLayout } from "../layout/dashboardLayout";
import { ChangePassowordForm } from "./components/changePasswordForm";
import { AuthContext } from "../context/authContext";

export default function ProfilePage() {
  const { userData } = useContext(AuthContext);
  return (
    <>
      <DashboardLayout>
        <div className="flex flex-col gap-4">
          <ChangePassowordForm id={userData.id} />
        </div>
      </DashboardLayout>
    </>
  );
}
