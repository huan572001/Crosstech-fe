import { Outlet } from "react-router-dom";
import { Navbar } from "../../layout/Navbar";

export const LayoutApp = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
