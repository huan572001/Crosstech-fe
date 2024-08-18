import { Connect } from "./component/Connect";
import TableHome from "./component/TableHome/TableHome";
import CounterRedux from "./component/CounterRedux";
import { Button } from "antd";
import { useAppDispatch } from "../../hooks/store";
import { setOpenModal } from "../../redux/slice/homeSlice";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <Connect />
      <TableHome />
      <CounterRedux />
      <Button
        type="primary"
        onClick={() => {
          dispatch(setOpenModal());
        }}
      >
        Open Modal
      </Button>
    </>
  );
};
