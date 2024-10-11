"use client";

import { useRouter } from "next/navigation";
import { LoginForm } from "../components/loginForm";
import { AuthLayout } from "../layout/authLayout";

export default function Login() {
  const router = useRouter();

  async function loginSubmit(e) {}
  return (
    <>
      <AuthLayout>
        <LoginForm title="Login Here" />
      </AuthLayout>
    </>
  );
}
