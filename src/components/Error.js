import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error">
      <h2>OOPs!</h2>
      <h3>Something went wrong</h3>
      <h4>{err.status + " : " + err.statusText}</h4>
    </div>
  );
};

export default Error;
