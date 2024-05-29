import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Button from "./components/Button";
import Input from "./components/Input";
import Card from "./components/Card";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/button" element={<Button />} />
          <Route path="/input" element={<Input />} />
          <Route path="/card" element={<Card />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
