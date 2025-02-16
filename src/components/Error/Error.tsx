import { useRouteError } from "react-router-dom";

const Error = () => {
  const routeError = useRouteError() as any;
  return (
    <div>
      <h1>Error Occured</h1>
      <h2>{`${routeError?.status} ${routeError?.statusText}`}</h2>
    </div>
  );
};

export default Error;
