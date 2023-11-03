import { Routes, Route } from "react-router-dom";

import "./globals.css";

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
