import { BrowserRouter, Route, Routes } from "react-router-dom";
import Applayout from "./pages/Applayout";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/Home";
import TourPackage from "./pages/TourPackage";
import Reviews from "./pages/Reviews";
import TourPackages from "./pages/TourPackages";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Applayout />}>
            <Route path="" element={<Home />} />
            <Route path="/tour-package" element={<TourPackage />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/tour-packages" element={<TourPackages />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
