import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = ({ user }) => {
  return (
    <>
      <Navbar user={user} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
