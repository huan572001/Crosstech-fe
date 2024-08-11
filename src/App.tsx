/* eslint-disable @typescript-eslint/no-explicit-any */

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { LayoutApp } from "./common/layout/LayoutApp";
import { HomePage } from "./pages/homePage/HomePage";
import { RouterLink } from "./util/RouterLink";
import { WalletPage } from "./pages/Wallet";
import { LeadPage } from "./pages/Lead";
import { AuthProvider } from "./common/context/AuthContext";
import { Login } from "./pages/auth/Login";
import { NotAuth } from "./pages/auth/NotAuth";
import PrivateRoute from "./common/context/PrivateRoute";
import { ROLE, RoleAll } from "./common/constan";

const App: React.FC = () => (
  <Router>
    <AuthProvider>
      <Routes>
        <Route path={RouterLink.Login} element={<Login />} />
        <Route element={<LayoutApp />}>
          <Route path={RouterLink.Home} element={<HomePage />} />
          <Route element={<PrivateRoute roles={RoleAll} />}>
            <Route path={RouterLink.WALLET} element={<WalletPage />} />
          </Route>
          <Route element={<PrivateRoute roles={[ROLE.ADMIN]} />}>
            <Route path={RouterLink.LEAD} element={<LeadPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotAuth />} />
      </Routes>
    </AuthProvider>
  </Router>
);

export default App;
