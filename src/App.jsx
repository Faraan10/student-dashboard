import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, DashBoard, Login, NotFound } from "./pages/index";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import PrivateRoute from "./routes/PrivateRoute";
import useAuth from "./hooks/useAuth";

const App = () => {
  const { loading, user } = useAuth;

  if (loading) {
    return (
      <div className="text-center mt-20">
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route element={<PrivateRoute user={user} />}>
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
