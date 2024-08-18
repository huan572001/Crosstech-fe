import { Outlet } from "react-router-dom";
import { Navbar } from "../../layout/Navbar";
import ModalHome from "../../component/modal/modalHome";

export const LayoutApp = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ModalHome />
    </>
  );
};
