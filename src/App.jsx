import { BrowserRouter, Route, Routes } from "react-router-dom";
import Applayout from "./pages/Applayout";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/Home";
import TourPackage from "./pages/TourPackage";
import Reviews from "./pages/Reviews";
import TourPackages from "./pages/TourPackages";
import MyCart from "./pages/MyCart";
import DashboardLayout from "./pages/Dashboards/DashboardLayout";
import SellerHome from "./components/Dashboard/SellerDashboard/SellerHome";
import MyPackages from "./components/Dashboard/SellerDashboard/MyPackages";
import Orders from "./components/Dashboard/SellerDashboard/Orders";
import Payments from "./components/Dashboard/SellerDashboard/Payments";
import ModifyPackage from "./pages/Dashboards/ModifyPackage";
import AddPackage from "./pages/Dashboards/AddPackage";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Applayout />}>
            <Route path="" element={<Home />} />
            <Route path="tour-package" element={<TourPackage />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="tour-packages" element={<TourPackages />} />
            <Route path="cart" element={<MyCart />} />
          </Route>

          <Route path="/seller-dashboard" element={<DashboardLayout />}>
            <Route path="" element={<SellerHome />} />
            <Route path="home" element={<SellerHome />} />
            <Route path="packages" element={<MyPackages />} />
            <Route path="packages/modify-package" element={<ModifyPackage />} />
            <Route path="packages/add-package" element={<AddPackage />} />
            <Route path="orders" element={<Orders />} />
            <Route path="payments" element={<Payments />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
