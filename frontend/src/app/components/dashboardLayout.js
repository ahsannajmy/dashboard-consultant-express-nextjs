"use client";
import { useState } from "react";
import { NavSide, NavUpper } from "./navContent";
import { fetchLogout } from "../auth/handler/apiHandler";
import { useRouter } from "next/navigation";

export const DashboardLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const openSideNavbar = () => {
    setOpen(true);
  };

  const closeSideNavbar = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    try {
      await fetchLogout("/users/logout", "POST", router);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row">
        <NavUpper
          handlerOpen={openSideNavbar}
          handlerClose={closeSideNavbar}
          navState={open}
        />
        <NavSide navState={open} handlerLogout={() => handleLogout()} />
        <div className="flex-1 mt-8 sm:mt-0 p-10">{children}</div>
      </div>
    </>
  );
};
