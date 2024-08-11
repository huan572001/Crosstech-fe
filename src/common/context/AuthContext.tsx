import { createContext, PropsWithChildren, useContext, useState } from "react";
import { User } from "../../type";
import { useNavigate } from "react-router-dom";
import { RouterLink } from "../../util/RouterLink";
import { KEY_LOCAL_USER } from "../constan";
interface AuthContextType {
  user: User | undefined;
  login: (user: User) => void;
  logout: () => void;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | undefined>(() => {
    const storeUser = localStorage.getItem(KEY_LOCAL_USER);
    return storeUser ? JSON.parse(storeUser) : undefined;
  });
  const navigate = useNavigate();
  const login = (userData: User) => {
    localStorage.setItem(KEY_LOCAL_USER, JSON.stringify(userData));
    setUser(userData);
    navigate(RouterLink.Home);
  };
  const logout = () => {
    localStorage.removeItem(KEY_LOCAL_USER);
    setUser(undefined);
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
