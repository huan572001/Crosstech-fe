/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "./App.css";
import "./App.less";
import { Button } from "antd";
import clsx from "clsx";
import logoSVG from "./assets/logo.svg";
import logoPNG from "./assets/logo.png";
import { LogoIcon } from "./common/icons";
import { AppButton } from "./component/button";
import { Navbar } from "./layout/Navbar";
import { User } from "./type";
function App() {
  const [isActive, setActive] = useState<boolean>(false);
  const [color, setColor] = useState<any>("black");
  const [type, setType] = useState<User>();
  console.log(type);

  return (
    <div className="A">
      <Navbar />
      <AppButton onClick={() => setActive(!isActive)}>A</AppButton>
      <AppButton
        onClick={() => {
          setColor(isActive ? "blue" : "red");
        }}
      >
        B
      </AppButton>
      <Button
        onClick={() => {
          setActive(!isActive);
          setColor(isActive ? "blue" : "red");
        }}
      >
        HUân
      </Button>
      <h1 onClick={() => setType(undefined)}>Vite + React</h1>
      <div className={clsx(isActive ? "bg-blue-500" : "bg-red-500")}>
        Nội dung của component
      </div>
      <LogoIcon color={color} />
      <img src={logoSVG} />
      <img src={logoPNG} />
    </div>
  );
}

export default App;
