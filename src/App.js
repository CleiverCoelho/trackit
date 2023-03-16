import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage"
import CadastroPage from "./pages/CadastroPage/CadastroPage";
import HojePage from "./pages/HojePage/HojePage";
import HabitosPage from "./pages/HabitosPage/HabitosPage";
import UserContext from "./contexts/UserContext";

export default function App() {
  
  const [userInfo, setUserInfo] = React.useState({});
  const [userHabitos, setUserHabitos] = React.useState("");
  
//   email
// : 
// "driventestandoemail12345678@gmail.com"
// id
// : 
// 8202
// image
// : 
// "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F968907307305511729%2F&psig=AOvVaw2UapwERpD1NpHCqtkqTfQL&ust=1678906782692000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNiMxaSN3P0CFQAAAAAdAAAAABAE"
// name
// : 
// "DrivenTesteCleiver"
// password
// : 
// "12345678"
// token
// : 
// "eyJhbGciOiJIUzI

  return (
    <UserContext.Provider value={{userInfo}}>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<LoginPage setUserInfo={setUserInfo}></LoginPage>}></Route>
          <Route path={`/cadastro`} element={<CadastroPage></CadastroPage>}></Route>
          <Route path={`/hoje`} element={<HojePage></HojePage>}></Route>
          <Route path={`/habitos`} element={<HabitosPage></HabitosPage>}></Route>


        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

