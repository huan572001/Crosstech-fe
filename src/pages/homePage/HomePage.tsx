import { Connect } from "./component/Connect";
import TableHome from "./component/TableHome/TableHome";
import { useAppDispatch } from "../../hooks/store";
import { useEffect } from "react";
import { getTaskUser } from "../../redux/slice/connectSocial";
import { Slider } from "./component/Slider";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTaskUser("huan15"));
  }, []);
  return (
    <>
      <Connect />
      <Slider />
      <TableHome />

      {/* <CounterRedux /> */}

      {/* <Button
        type="primary"
        onClick={() => {
          dispatch(setOpenModal());
        }}
      >
        Open Modal
      </Button> */}
    </>
  );
};
