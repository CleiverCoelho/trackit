import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage"
import CadastroPage from "./pages/CadastroPage/CadastroPage";
import HojePage from "./pages/HojePage/HojePage";
import HabitosPage from "./pages/HabitosPage/HabitosPage";
import UserContext from "./contexts/UserContext";
import HistoricoPage from "./pages/HistoricoPage/HistoricoPage";

export default function App() {
  
  const [userInfo, setUserInfo] = React.useState({});
  const [habitosAPI, setHabitosAPI] = React.useState([])
  const [porcentagem, setPorcentagem] = React.useState(0);

  return (
    <UserContext.Provider value={{userInfo, habitosAPI, porcentagem}}>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<LoginPage setUserInfo={setUserInfo}></LoginPage>}></Route>
          <Route path={`/cadastro`} element={<CadastroPage></CadastroPage>}></Route>
          <Route path={`/hoje`} element={<HojePage setPorcentagem={setPorcentagem}></HojePage>}></Route>
          <Route path={`/habitos`} element={<HabitosPage setHabitosAPI={setHabitosAPI}></HabitosPage>}></Route>
          <Route path={`/historico`} element={<HistoricoPage></HistoricoPage>}></Route>


        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

