import Link from "next/link";

export const LoginForm = (props) => {
  return (
    <div className="w-72">
      <div className="flex flex-col items-start gap-4">
        <span className="font-semibold text-2xl">{props.title}</span>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-2">
            <span>Email</span>
            <input
              className="text-gray-500 rounded-md p-2 text-xs drop-shadow-lg"
              type="email"
              name="email"
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <span>Password</span>
            <input
              className="text-gray-500 rounded-md p-2 text-xs drop-shadow-lg"
              type="password"
              name="password"
            ></input>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 w-full">
          <button
            className="px-2 py-2 rounded-lg bg-primary hover:bg-primary/80 text-secondary w-full"
            type="submit"
          >
            <span>Login</span>
          </button>
          <span>Dont have an account ?</span>
          <Link
            href="/"
            className="px-2 py-2 rounded-lg bg-primary hover:bg-primary/80 text-secondary w-full text-center"
          >
            <span className="text-center">Register</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
