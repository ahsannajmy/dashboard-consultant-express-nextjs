"use client";

import { useState } from "react";
import { MainInput, MainInputCheckbox } from "@/app/components/input";
import { MainSubmitButton } from "@/app/components/button";
import { formRequeest } from "@/app/handler/apiHandler";

export const ChangePassowordForm = (props) => {
  const [type, setType] = useState("password");

  const handleRevealPassword = (e) => {
    if (e.target.checked) {
      setType("text");
    } else {
      setType("password");
    }
  };

  async function changePasswordHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    try {
      await formRequeest(
        `/users/change-password/${props.id}`,
        "POST",
        JSON.stringify(formObject)
      );
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <form onSubmit={(e) => changePasswordHandler(e)}>
      <div className="flex flex-col gap-4">
        <span className="text-2xl text-primary font-semibold text-center">
          Change Your Password
        </span>
        <div className="flex flex-col gap-4 w-1/2">
          <MainInput name="oldPassword" type={type} title="Old Password" />
          <MainInput name="newPassword" type={type} title="New Password" />
          <MainInputCheckbox
            title="Reveal password"
            checkedHandler={(e) => handleRevealPassword(e)}
          />
          <MainSubmitButton>Submit</MainSubmitButton>
        </div>
      </div>
    </form>
  );
};
