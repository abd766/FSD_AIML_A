import { useState } from "react";
import { Routes,Route} from "react-router-dom";
import Counter from "./components/Counter";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/counter" element={<Counter/>} />
        <Route path="/" element={<h1>Home Page</h1>}/>
        <Route path="/login" element={<h1>Login Page</h1>} />
        <Route path="/logout" element={<h1>Logout Page</h1>} />
        <Route path="*" element={<h1>No such page available</h1>} />
      </Routes>
    </div>
  );
};

export default App;
