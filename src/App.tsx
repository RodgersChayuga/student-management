import { Routes, Route } from "react-router-dom";

import "./globals.css";
import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";
import Home from "./_root/pages/home";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route index path="/sign-in" element={<SigninForm />} />
        <Route index path="/sign-up" element={<SignupForm />} />

        {/* private routes */}
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;
