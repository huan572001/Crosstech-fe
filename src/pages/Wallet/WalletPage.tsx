import { useAuth } from "../../common/context/AuthContext";

export const WalletPage = () => {
  const { user } = useAuth();
  return (
    <>
      WalletPage
      <div>address: {user?.address}</div>
    </>
  );
};
