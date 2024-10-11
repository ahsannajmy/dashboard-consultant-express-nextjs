"use client";

import { useRouter } from "next/navigation";
import { LoginForm } from "../components/loginForm";
import { AuthLayout } from "../layout/authLayout";
import { fetchLogin } from "../handler/apiHandler";

export default function Login() {
  const router = useRouter();

  async function loginSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = {};

    formData.forEach((value, key) => {
      formObject[key] = value;
    });
    try {
      await fetchLogin(
        "/users/login",
        "POST",
        JSON.stringify(formObject),
        router
      );
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <>
      <AuthLayout>
        <LoginForm title="Login Here" submitHandler={(e) => loginSubmit(e)} />
      </AuthLayout>
    </>
  );
}
