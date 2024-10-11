import { RegisterForm } from "../components/registerForm";
import { AuthLayout } from "../layout/authLayout";

export default function Register() {
  return (
    <>
      <AuthLayout>
        <RegisterForm title="Register Here" />
      </AuthLayout>
    </>
  );
}
