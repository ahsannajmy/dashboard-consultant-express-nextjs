import Link from "next/link";
import { AuthInput } from "./inputs";

export const RegisterForm = (props) => {
  return (
    <>
      <div className="w-72">
        <div className="flex flex-col items-start gap-4">
          <span className="font-semibold text-2xl">{props.title}</span>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-2">
              <AuthInput title="Nama" type="text" name="nama" />
            </div>
            <div className="flex flex-col gap-2">
              <AuthInput title="Email" type="email" name="email" />
            </div>
            <div className="flex flex-col gap-2">
              <AuthInput title="Password" type="password" name="password" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 w-full">
            <button
              className="px-2 py-2 rounded-lg bg-primary hover:bg-primary/80 text-secondary w-full"
              type="submit"
            >
              <span>Register</span>
            </button>
            <span className="text-xs">Already have an account ?</span>
            <Link
              href="/auth/login"
              className="px-2 py-2 rounded-lg bg-primary hover:bg-primary/80 text-secondary w-full text-center"
            >
              <span className="text-center">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
