import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import UseEffect from "./routes/UseEffect";
import UseInput from "./routes/UseInput";
import UseState from "./routes/UseState";
import UseTabs from "./routes/UseTabs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useState" element={<UseState />} />
        <Route path="/useEffect" element={<UseEffect />} />
        <Route path="/useState/useInput" element={<UseInput />} />
        <Route path="/useTabs" element={<UseTabs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
