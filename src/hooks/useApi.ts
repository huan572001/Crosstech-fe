/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

const useApi = (fetch: (data: any) => any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>();
  const callApi = async (data: any) => {
    setLoading(true);
    try {
      const rq = await fetch(data);
      if (rq?.success) {
        setData(rq?.msg);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, data, callApi };
};
export default useApi;
