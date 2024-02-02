/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, Global } from "@emotion/react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Welcome from "./pages/Welcome";
import Savings from "./pages/Savings";
import Goal from "./pages/Goal";
import Summary from "./pages/Summary";
import { SavingsProvider } from "./context/SavingsContext";
function App() {
  const globalStyles = css`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: "Poly", sans-serif;
      scroll-behavior: smooth;
    }
  `;

  return (
    <div>
      <SavingsProvider>
        <Global styles={globalStyles} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/savings" element={<Savings />} />
          <Route path="/savings/:id" element={<Goal />} />
          <Route path="/Summary" element={<Summary />} />
        </Routes>
      </SavingsProvider>
    </div>
  );
}

export default App;
