export const employeeColumns = [
  {
    key: "nama",
    label: "NAMA",
  },
  {
    key: "status_registrasi",
    label: "STATUS REGISTRASI",
  },
  {
    key: "jabatan",
    label: "JABATAN",
  },
  {
    key: "status_sertifikasi",
    label: "STATUS SERTIFIKASI",
  },
  {
    key: "status_kuasa_hukum",
    label: "STATUS KUASA HUKUM",
  },
  {
    key: "izin_berlaku_pengacara",
    label: "IZIN BERLAKU PENGACARA",
  },
  {
    key: "izin_berlaku_konsultan",
    label: "IZIN BERLAKU KONSULTAN",
  },
];

export const status_registrasi_color = {
  PENDING: "bg-neutral",
  ACCEPTED: "bg-success",
  NEED_REVISION: "bg-warning",
};

export const enum_status_regist_map = {
  PENDING: "PENDING",
  ACCEPTED: "ACCEPTED",
  NEED_REVISION: "NEED REVISION",
};

export const enum_position_map = {
  PARTNER: "PARTNER",
  SENIOR_MANAGER: "SENIOR MANAGER",
  MANAGER: "MANAGER",
  ASSISTANT_MANAGER: "ASSISTANT MANAGER",
  SENIOR_SPECIALIST: "SENIOR SPECIALIST",
  SPECIALIST: "SPECIALIST",
  ADMIN: "ADMIN",
};

export const enum_status_sertif_map = {
  A: "A",
  B: "B",
  C: "C",
  NOT_A_TAX_CONSULTANT: "BUKAN KONSULTAN PAJAK",
};
