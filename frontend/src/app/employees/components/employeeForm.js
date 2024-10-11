import {
  EmployeeDateInput,
  EmployeeInput,
  EmployeeSelectInput,
  jabatan,
  status_kuasa_hukum,
  status_sertifikasi,
} from "../components/input";

export const EmployeeForm = () => {
  return (
    <>
      <form>
        <div className="flex flex-col gap-4">
          <span className="text-2xl font-semibold">Add New Employee</span>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2 w-full">
              <EmployeeInput title="Nama" type="text" />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <EmployeeSelectInput
                title="Jabatan"
                name="jabatan"
                selectItems={jabatan}
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <EmployeeSelectInput
                title="Status Sertifikasi"
                name="status_sertifikasi"
                selectItems={status_sertifikasi}
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <EmployeeSelectInput
                title="Status Kuasa Hukum"
                name="status_kuasa_hukum"
                selectItems={status_kuasa_hukum}
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <EmployeeDateInput
                title="Izin Berlaku Pengacara"
                name="izin_berlaku_pengacara"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <EmployeeDateInput
                title="Izin Berlaku Konsultan"
                name="izin_berlaku_konsultan"
              />
            </div>
          </div>
          <button
            type="submit"
            className="p-2 rounded-lg  bg-button1 text-secondary max-w-fit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};
