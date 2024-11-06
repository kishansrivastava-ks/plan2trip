import { BrowserRouter, Route, Routes } from "react-router-dom";
import Applayout from "./pages/Applayout";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/Home";
import TourPackage from "./pages/TourPackage";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Applayout />}>
            <Route path="" element={<Home />} />
            <Route path="/tour-packages" element={<TourPackage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
