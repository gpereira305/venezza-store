import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoreHeader from "./components/StoreHeader";
import StoreFooter from "./components/StoreFooter";
import StoreHomepage from "./screens/StoreHomepage";
import StoreProductpage from "./screens/StoreProductpage/StoreProductpage";
import StoreLogin from "./components/StoreLogin";
import StoreRegister from "./components/StoreRegister";
import StoreNotfound from "./screens/StoreNotfound";
import StoreCart from "./screens/StoreCartpage/StoreCartpage";
// npm run dev

function App() {
  return (
    <BrowserRouter>
      <StoreHeader />
      <Routes>
        <Route exact path={"/"} element={<StoreHomepage />} />
        <Route exact path={"/product/:id"} element={<StoreProductpage />} />
        <Route exact path={"/cart/:id"} element={<StoreCart />} />
        <Route exact path={"/login"} element={<StoreLogin />} />
        <Route exact path={"/register"} element={<StoreRegister />} />
        <Route path="*" element={<StoreNotfound />} />
      </Routes>
      <StoreFooter />
    </BrowserRouter>
  );
}

export default App;
