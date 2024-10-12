"use client";
import { useRef, useState } from "react";
import { UploadIcon } from "./icon";

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

export const EmployeeFileInput = (props) => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };

  return (
    <>
      <span>{props.title}</span>
      <div
        className="p-2 text-gray-500 text-xs flex gap-2 items-center rounded-lg bg-secondary drop-shadow-lg w-1/2 cursor-pointer"
        onClick={handleFileUpload}
      >
        <UploadIcon className="w-4 h-4" />
        <span>Upload file</span>
        <input
          type="file"
          name={props.name}
          className="hidden"
          required
          accept={props.fileType}
          ref={fileInputRef}
          onChange={handleFileChange}
        ></input>
      </div>
      {fileName && <span className="text-gray-500 text-xs">{fileName}</span>}
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
