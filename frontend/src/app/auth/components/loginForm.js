import Link from "next/link";
import { MainInput } from "@/app/components/input";

export const LoginForm = (props) => {
  return (
    <form onSubmit={props.submitHandler}>
      <div className="w-72">
        <div className="flex flex-col items-start gap-4">
          <span className="font-semibold text-2xl">{props.title}</span>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-2">
              <MainInput title="Email" type="email" name="email" />
            </div>
            <div className="flex flex-col gap-2">
              <MainInput title="Password" type="password" name="password" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 w-full">
            <button
              className="px-2 py-2 rounded-lg bg-primary hover:bg-primary/80 text-secondary w-full"
              type="submit"
            >
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
