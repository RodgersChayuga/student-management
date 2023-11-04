import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";

const RootLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/sign-in" />
      ) : (
        <section className="flex flex-col w-full py-1 bg-blue-50">
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
