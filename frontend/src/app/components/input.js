"use client";
import { useRef, useState } from "react";
import { UploadIcon } from "./generalIcon";

export const MainInput = (props) => {
  return (
    <>
      <span>{props.title}</span>
      <input
        className="text-gray-500 rounded-md p-2 text-xs drop-shadow-lg"
        type={props.type}
        name={props.name}
        placeholder={props.title}
      ></input>
    </>
  );
};

export const MainSelectInput = (props) => {
  return (
    <>
      <span>{props.title}</span>
      <select
        className="text-gray-500 rounded-md p-2 text-xs drop-shadow-lg"
        required
        onChange={props.onChange}
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

export const MainDateInput = (props) => {
  return (
    <>
      <span>{props.title}</span>
      <input
        type="date"
        name={props.name}
        className="text-gray-500 rounded-md p-2 text-xs drop-shadow-lg"
        required
        disabled={props.disabled}
      ></input>
    </>
  );
};

export const MainFileInput = (props) => {
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

export const MainInputCheckbox = (props) => {
  return (
    <>
      <div className="flex flex-row gap-2 items-center">
        <input
          type="checkbox"
          className="accent-button1"
          onChange={props.checkedHandler}
        ></input>
        <span className="text-gray-500 text-xs ">{props.title}</span>
      </div>
    </>
  );
};
