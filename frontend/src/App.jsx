import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Checkout from "./Checkout.jsx";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/checkout"
        element={<Checkout />}
      />

    </Routes>
  );
}

export default App;