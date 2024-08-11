import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { RouterLink } from "../../util/RouterLink";

interface Props {
  roles: string[];
}
const PrivateRoute: React.FC<Props> = ({ roles }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to={RouterLink.Login} />;
  }

  if (roles && !roles.includes(user.role || "")) {
    return <Navigate to={RouterLink.NOT_AUTH} />;
  }
  return <Outlet />;
};
export default PrivateRoute;
