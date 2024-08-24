import { Connect } from "./component/Connect";
import TableHome from "./component/TableHome/TableHome";
// import { useAppDispatch } from "../../hooks/store";
// import { useEffect } from "react";
// import { getTaskUser } from "../../redux/slice/connectSocial";
import { Slider } from "./component/Slider";
import { HomeAPI } from "../../services/homeService";
import useApi from "../../hooks/useApi";
import { useEffect } from "react";

export const HomePage = () => {
  // const dispatch = useAppDispatch();
  const { callApi, data, loading } = useApi(HomeAPI.getUserByAddress);
  // useEffect(() => {
  //   dispatch(getTaskUser("huan15"));
  // }, []);
  useEffect(() => {
    callApi("string");
  }, []);
  console.log(data, loading);

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
