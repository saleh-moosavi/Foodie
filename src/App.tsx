import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./index/Index";
import Header from "./components/Header";

function App() {
  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
