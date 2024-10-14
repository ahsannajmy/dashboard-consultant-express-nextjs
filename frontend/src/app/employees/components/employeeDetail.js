import { formatDate } from "../utils/formatDate";
import {
  enum_position_map,
  enum_status_sertif_map,
} from "../utils/tableContent";

export const EmployeeDetail = (props) => {
  return (
    <>
      <div className="px-2 py-4 rounded-lg bg-secondary w-full drop-shadow-lg">
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-2xl text-center">
            Employee Information
          </span>
          <Detail
            title="Jabatan"
            label={enum_position_map[props.detail.jabatan]}
          />
          <Detail
            title="Status Sertifikasi"
            label={enum_status_sertif_map[props.detail.status_sertifikasi]}
          />
          <Detail
            title="Status Kuasa Hukum"
            label={
              props.detail.status_kuasa_hukum
                ? "KUASA HUKUM"
                : "BUKAN KUASA HUKUM"
            }
          />
          <Detail
            title="Izin Berlaku Pengacara"
            label={formatDate(props.detail.izin_berlaku_pengacara)}
          />
          <Detail
            title="Izin Berlaku Konsultan"
            label={formatDate(props.detail.izin_berlaku_konsultan)}
          />
        </div>
      </div>
    </>
  );
};

const Detail = (props) => {
  return (
    <>
      <span className="text-xs font-semibold">
        {props.title} : <span className="text-gray-500">{props.label}</span>
      </span>
    </>
  );
};
