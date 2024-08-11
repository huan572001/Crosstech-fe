import { ROLE } from "../../common/constan";
import { useAuth } from "../../common/context/AuthContext";
import { AppButton } from "../../component/button";

export const Login = () => {
  const { login } = useAuth();

  return (
    <>
      <AppButton
        onClick={() => {
          login({
            address: "huan",
            name: "huan",
            role: ROLE.USER,
          });
        }}
      >
        Login
      </AppButton>
    </>
  );
};
