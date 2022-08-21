import { lazy, Suspense } from "react";
import * as ROUTES from "./constants/routes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserContext from "./context/user";

import useAuthListener from "./hooks/use-auth-listener";

const Signup = lazy(() => import("./components/signup"));
const Login = lazy(() => import("./pages/login"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const NotFound = lazy(() => import("./pages/not-found"));

export default function App() {
  let user = useAuthListener();

  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path={ROUTES.DASHBOARD} element={<Dashboard />}></Route>
            <Route path={ROUTES.LOG_IN} element={<Login />}></Route>
            <Route path={ROUTES.SIGN_UP} element={<Signup />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}
