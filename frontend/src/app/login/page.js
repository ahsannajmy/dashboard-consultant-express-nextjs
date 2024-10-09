import { LoginForm } from "./components/loginForm";

export default function Login() {
  return (
    <>
      <div className="flex">
        <div className="bg-primary w-2/3 h-screen">
          <div className="flex items-center justify-center h-full">
            <span className="text-6xl text-secondary shadow-sm font-bold">
              Dashboard Consultant
            </span>
          </div>
        </div>
        <div className="bg-secondary w-1/3 h-screen">
          <div className="flex items-center justify-center h-full">
            <LoginForm title="Login Here" />
          </div>
        </div>
      </div>
    </>
  );
}
