import { BrowserRouter, Route, Routes } from "react-router-dom";
import Applayout from "./pages/Applayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Applayout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
