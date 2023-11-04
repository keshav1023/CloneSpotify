import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HelloComponent />} />
          <Route path="/hi" element={<div>Hi</div>} />
          <Route path="/bye" element={<div>Bye</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const HelloComponent=()=>{
  return <div>This is Hello from component</div>;
};

export default App;
