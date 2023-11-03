import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/header";

const RootLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <section className="flex flex-col w-full py-10 bg-white">
          <div className="w-[90%] mx-auto">
            <Header />
            <Outlet />
          </div>
        </section>
      )}
    </>
  );
};

export default RootLayout;
