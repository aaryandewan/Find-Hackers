import { lazy, Suspense } from "react";
import * as ROUTES from "./constants/routes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Signup = lazy(() => import("./pages/signup"));
const Login = lazy(() => import("./pages/login"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const NotFound = lazy(() => import("./pages/not-found"));

export default function App() {
  return (
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
  );
}
