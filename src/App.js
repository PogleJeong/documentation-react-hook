import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import UseEffect from "./routes/UseEffect";
import UseState from "./routes/UseState";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useState" element={<UseState />} />
        <Route path="/useEffect" element={<UseEffect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
