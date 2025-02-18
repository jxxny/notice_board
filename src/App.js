import React from "react";
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import "./App.css";

import ClientMain from "page/client/main/ClientMain";
import ClientHeader from "page/client/header/ClientHeader";
import ClientLogin from "page/client/login/ClientLogin";

import ClientMainBoard from "page/client/Board/Main/ClientMainBoard";

import NotFound from "page/notfound/Notfound";
import { styled } from "styled-components";

import Test_TextEditor from "page/client/Test/textEditer";

import FindId from "page/client/login/FindId";
import Regster from "page/client/login/Register";
//import ClientMain from "./page/client/main/ClientMain";

const AppDiv = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
`

const App = () => {
  return (
    <AppDiv>
    <ClientHeader />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientLogin />} />
        
        <Route path="/login/*" element={<ClientLogin />} />
        <Route path="/find_id/*" element={<FindId find="id"/>} />
        <Route path="/find_pw/*" element={<FindId find="pw"/>} />
        <Route path="/register/*" element={<Regster />} />

        <Route path="/board/*" element={<ClientMainBoard/>}></Route>
        
        <Route path="/main/*" element={<ClientMain />} />

        <Route path="/test_editor/*" element={<Test_TextEditor />} />
        
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </AppDiv>
  );
}

export default App;
