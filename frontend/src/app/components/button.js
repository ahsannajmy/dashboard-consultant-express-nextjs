import Link from "next/link";

export const MainSubmitButton = ({ children }) => {
  return (
    <>
      <button
        type="submit"
        className="px-3 py-2 rounded-lg  bg-button1 hover:bg-button1/70 text-secondary max-w-fit"
      >
        {children}
      </button>
    </>
  );
};

export const MainLinkButton = (props) => {
  return (
    <>
      <Link
        className="px-3 py-2 rounded-lg flex items-center flex-row gap-2 bg-button1
         hover:bg-button1/70 text-secondary max-w-fit"
        href={props.href}
      >
        {props.children}
      </Link>
    </>
  );
};
