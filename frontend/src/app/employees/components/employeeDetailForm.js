import { MainDateInput, MainSelectInput } from "@/app/components/input";
import {
  jabatan,
  status_kuasa_hukum,
  status_sertifikasi,
} from "../utils/employeeValueMapper";
import { useState } from "react";
import { MainSubmitButton } from "@/app/components/button";

export const EmployeeDetailForm = (props) => {
  const [statusSertifikasi, setStatusSertifikasi] = useState("");
  const [statusKuasaHukum, setStatusKuasaHukum] = useState("");

  const handleSertifikasiChange = (e) => {
    setStatusSertifikasi(e.target.value);
  };

  const handleKuasaHukumChange = (e) => {
    setStatusKuasaHukum(e.target.value);
  };
  return (
    <>
      <form>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2 col-span-2 w-full">
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
          <MainSubmitButton>Edit</MainSubmitButton>
        </div>
      </form>
    </>
  );
};
