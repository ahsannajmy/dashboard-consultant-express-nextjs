"use client";

import {
  MainDateInput,
  MainFileInput,
  MainInput,
  MainSelectInput,
} from "@/app/components/input";
import {
  jabatan,
  status_kuasa_hukum,
  status_sertifikasi,
} from "../utils/employeeValueMapper";
import { useState } from "react";
import { MainSubmitButton } from "@/app/components/button";

export const EmployeeForm = (props) => {
  const [statusSertifikasi, setStatusSertifikasi] = useState("");
  const [statusKuasaHukum, setStatusKuasaHukum] = useState("");

  const handleSertifikasiChange = (e) => {
    setStatusSertifikasi(e.target.value);
  };

  const handleKuasaHukumChange = (e) => {
    setStatusKuasaHukum(e.target.value);
  };

  return (
    <div>
      <form onSubmit={props.submitHandler}>
        <div className="flex flex-col gap-4">
          <span className="text-2xl font-semibold text-center">
            Add New Employee
          </span>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2 w-full">
              <MainInput name="nama" title="Nama" type="text" />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <MainInput name="email" title="Email" type="email" />
            </div>
            <div className="flex flex-col gap-2 w-full col-span-2">
              <MainSelectInput
                title="Jabatan"
                name="jabatan"
                selectItems={jabatan}
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <MainSelectInput
                title="Status Sertifikasi"
                name="status_sertifikasi"
                selectItems={status_sertifikasi}
                onChange={(e) => handleSertifikasiChange(e)}
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <MainSelectInput
                title="Status Kuasa Hukum"
                name="status_kuasa_hukum"
                selectItems={status_kuasa_hukum}
                onChange={(e) => handleKuasaHukumChange(e)}
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <MainDateInput
                title="Izin Berlaku Pengacara"
                name="izin_berlaku_pengacara"
                disabled={statusSertifikasi === "NOT_A_TAX_CONSULTANT"}
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <MainDateInput
                title="Izin Berlaku Konsultan"
                name="izin_berlaku_konsultan"
                disabled={statusKuasaHukum === "false"}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-xs">
              * New Employee will automatically create new user
            </span>
            <span className="font-semibold text-xs">
              * Inform your new employee to check the email for account
              credentials
            </span>
          </div>
          <MainSubmitButton>Submit</MainSubmitButton>
        </div>
      </form>
    </div>
  );
};

export const EmployeeExcelForm = (props) => {
  return (
    <div>
      <form onSubmit={props.submitHandler}>
        <div className="flex flex-col gap-4">
          <span className="text-2xl font-semibold text-center">
            Add Employee With Excel
          </span>
          <div className="flex flex-col gap-2 w-full">
            <MainFileInput
              name="excel-file"
              title="Excel File"
              fileType=".xlsx"
            />
          </div>
          <MainSubmitButton>Submit</MainSubmitButton>
        </div>
      </form>
    </div>
  );
};
