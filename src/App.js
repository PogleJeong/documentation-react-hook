import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import UseEffect from "./routes/UseEffect";
import UseInput from "./routes/UseInput";
import UseState from "./routes/UseState";
import UseTabs from "./routes/UseTabs";
import UseClick from "./routes/UseClick";
import UseConfirm from "./routes/UseConfirm";
import UsePreventLeave from "./routes/UsePreventLeave";
import UseFadeIn from "./routes/UseFadeIn";
import UseNetwork from "./routes/useNetwork";
import UseScroll from "./routes/UseScroll";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useState" element={<UseState />} />
        <Route path="/useEffect" element={<UseEffect />} />
        <Route path="/useState/useInput" element={<UseInput />} />
        <Route path="/useState/useTabs" element={<UseTabs />} />
        <Route path="/useEffect/useClick" element={<UseClick />} />
        <Route path="/useEffect/useConfirm" element={<UseConfirm />} />
        <Route path="/useEffect/usePreventLeave" element={<UsePreventLeave />} />
        <Route path="/useEffect/useFadeIn" element={<UseFadeIn />} />
        <Route path="/useEffect/useNetwork" element={<UseNetwork />} />
        <Route path="/useEffect/useScroll" element={<UseScroll />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
