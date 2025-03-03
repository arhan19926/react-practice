import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>This is the About page</h1>
      <Outlet/>
    </>
  );
};

export default About;
