import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoreHeader from "./components/StoreHeader";
import StoreFooter from "./components/StoreFooter";
import StoreHomepage from "./screens/StoreHomepage";
import StoreDetailspage from "./screens/StoreDetailspage";
import StoreNotfound from "./screens/StoreNotfound";

function App() {
  return (
    <BrowserRouter>
      <StoreHeader />
      <Routes>
        <Route exact path={"/"} element={<StoreHomepage />} />
        <Route exact path={"/product-details"} element={<StoreDetailspage />} />
        <Route path="*" element={<StoreNotfound />} />
      </Routes>
      <StoreFooter />
    </BrowserRouter>
  );
}

export default App;
