import { Button } from "antd";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../../../redux/slice/homeSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/store";

export default function CounterRedux() {
  const { value } = useAppSelector((state) => state.counter);
  const dispathch = useAppDispatch();
  console.log(value);
  return (
    <div>
      <div className="flex justify-center">{value}</div>

      <Button
        onClick={() => {
          dispathch(increment());
        }}
      >
        Cộng
      </Button>
      <Button
        onClick={() => {
          dispathch(decrement());
        }}
      >
        Trừ
      </Button>
      <Button
        onClick={() => {
          dispathch(incrementByAmount(5));
        }}
      >
        năm
      </Button>
    </div>
  );
}
