import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, NavBar } from "./components";
export default function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
  );
}
