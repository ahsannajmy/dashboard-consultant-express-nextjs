export const AuthInput = (props) => {
  return (
    <>
      <span>{props.title}</span>
      <input
        className="text-gray-500 rounded-md p-2 text-xs drop-shadow-lg"
        type={props.type}
        name={props.name}
      ></input>
    </>
  );
};
