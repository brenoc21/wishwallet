import GlobalStyle from "./styles/global";
import React from "react";
import Home from "./pages/Home/index";
import { Route, Routes } from "react-router-dom";
import AddToken from "./pages/AddToken";
import EditToken from "./pages/EditToken";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route  path="/" element={<Home></Home>}></Route>
        <Route  path="/addtoken" element={<AddToken />}></Route>
        <Route  path="/:id" element={<EditToken />}></Route>
      </Routes>
    </div>
  );
}

export default App;