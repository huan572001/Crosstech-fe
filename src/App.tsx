/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import "./App.css";
import "./App.less";

import { Navbar } from "./layout/Navbar";
import { HomeAPI } from "./services/homeService";
import { IUser } from "./type";
import { Input, notification } from "antd";
import { SearchProps } from "antd/es/input";
const { Search } = Input;
function App() {
  const [user, setUser] = useState<IUser[]>([]);
  const [userInfo, setUserInfo] = useState<any>();
  const getUser = async () => {
    try {
      const rq = await HomeAPI.getUser();
      if (rq.status) {
        setUser(rq.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getUserById = async (address: string) => {
    try {
      const rq = await HomeAPI.getUserById(address);
      if (rq?.success) {
        setUserInfo(rq?.msg);
      } else {
        setUserInfo(undefined);
      }
    } catch (error) {
      console.log(error);
      setUserInfo(undefined);
    }
  };
  const create = async (address: string) => {
    try {
      const rq = await HomeAPI.createUser({
        address: address,
        password: "1234156",
      });
      if (rq?.success) {
        notification.info({
          message: "success",
        });
      } else {
        notification.warning({
          message: rq?.msg,
        });
      }
    } catch (error) {
      console.log(error);
      notification.error({
        message: "error",
      });
    }
  };
  const onSearch: SearchProps["onSearch"] = (value) => {
    getUserById(value);
  };
  const onCreateUser: SearchProps["onSearch"] = (value) => {
    create(value);
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="mb-24">
      <Navbar />
      <p>========================get all use=============</p>
      {user.map((e) => {
        return <div className="bg-red-500">{e.address.street}</div>;
      })}
      <p>========================get user by Id=============</p>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      {userInfo ? (
        <>
          <p>address: {userInfo?.address}</p>
          <p>twitterUsername: {userInfo?.twitterUsername}</p>
        </>
      ) : (
        "Can not user"
      )}
      <p>
        ========================================Register==========================
      </p>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onCreateUser}
      />
    </div>
  );
}

export default App;
