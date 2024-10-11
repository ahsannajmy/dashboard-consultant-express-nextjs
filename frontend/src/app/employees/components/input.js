export const EmployeeInput = (props) => {
  return (
    <>
      <span>{props.title}</span>
      <input
        className="text-gray-500 rounded-md p-2 text-xs drop-shadow-lg"
        type={props.type}
        name={props.name}
        placeholder={props.title}
        required
      ></input>
    </>
  );
};

export const EmployeeSelectInput = (props) => {
  return (
    <>
      <span>{props.title}</span>
      <select
        className="text-gray-500 rounded-md p-2 text-xs drop-shadow-lg"
        required
        name={props.name}
      >
        {props.selectItems.map((item, index) => (
          <>
            <option value={item.value} key={index}>
              {item.key}
            </option>
          </>
        ))}
      </select>
    </>
  );
};

export const EmployeeDateInput = (props) => {
  return (
    <>
      <span>{props.title}</span>
      <input
        type="date"
        name={props.name}
        className="text-gray-500 rounded-md p-2 text-xs drop-shadow-lg"
        required
      ></input>
    </>
  );
};

export const jabatan = [
  { key: "Partner", value: "PARTNER" },
  { key: "Senior Manager", value: "SENIOR_MANAGER" },
  { key: "Manager", value: "MANAGER" },
  { key: "Assistant Manager", value: "ASSISTANT_MANAGER" },
  { key: "Senior Specialist", value: "SENIOR_SPECIALIST" },
  { key: "Specialist", value: "SPECIALIST" },
  { key: "Admin", value: "ADMIN" },
];

export const status_sertifikasi = [
  { key: "A", value: "A" },
  { key: "B", value: "B" },
  { key: "C", value: "C" },
  { key: "Not a Tax Consultant", value: "NOT_A_TAX_CONSULTANT" },
];

export const status_kuasa_hukum = [
  { key: "Kuasa Hukum", value: true },
  { key: "Bukan Kuasa Hukum", value: false },
];
