import { BrowserRouter, Route, Routes } from "react-router-dom";
import Applayout from "./pages/Applayout";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/Home";
import TourPackage from "./pages/TourPackage";
import Reviews from "./pages/Reviews";
import TourPackages from "./pages/TourPackages";
import MyCart from "./pages/MyCart";
import DashboardLayout from "./pages/Dashboards/DashboardLayout";

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
            <Route path="/cart" element={<MyCart />} />
          </Route>
          <Route path="/seller-dashboard" element={<DashboardLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
