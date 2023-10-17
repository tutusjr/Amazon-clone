import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./components";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
  );
}
