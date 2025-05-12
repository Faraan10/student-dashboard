import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, DashBoard, Login, NotFound } from "./pages/index";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import PrivateRoute from "./routes/PrivateRoute";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<DashBoard />} />
            </Route>
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
