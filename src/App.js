import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage"
import CadastroPage from "./pages/CadastroPage/CadastroPage";
import HojePage from "./pages/HojePage/HojePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<LoginPage></LoginPage>}></Route>
        <Route path={`/cadastro`} element={<CadastroPage></CadastroPage>}></Route>
        <Route path={`/hoje`} element={<HojePage></HojePage>}></Route>


      </Routes>
    </BrowserRouter>
  );
}

