import { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup"
import Product from "./pages/Product";
import ViewUsers from "./pages/ViewUsers";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <Home /> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/viewproducts" element={<Product />} />
      </Routes>
        {/* <Route path="/users" element={<ViewUsers />} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
