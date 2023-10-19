import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CheckOut, HomePage, NavBar, ProductPage, SearchResults } from "./components";
export default function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
      <Route exact path="/" element={<HomePage />}/>
      <Route exact path="/search" element={<SearchResults />}/>
      <Route exact path="/product/:id" element={<ProductPage />}/>
      <Route exact path="/checkout" element={<CheckOut />}/>
      </Routes>
    </BrowserRouter>
  );
}
