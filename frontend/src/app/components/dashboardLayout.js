"use client";
import { useState } from "react";
import { NavSide, NavUpper } from "./navContent";

export const DashboardLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  const openSideNavbar = () => {
    setOpen(true);
  };

  const closeSideNavbar = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row">
        <NavUpper
          handlerOpen={openSideNavbar}
          handlerClose={closeSideNavbar}
          navState={open}
        />
        <NavSide navState={open} />
        <div className="flex-1 mt-8 sm:mt-0 p-10">{children}</div>
      </div>
    </>
  );
};
