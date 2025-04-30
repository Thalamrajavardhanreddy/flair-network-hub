
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MobileNavbar from "./MobileNavbar";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 pb-16 md:pb-0">
          <div className="container py-4 max-w-5xl">
            <Outlet />
          </div>
        </main>
      </div>
      <MobileNavbar />
    </div>
  );
};

export default MainLayout;
