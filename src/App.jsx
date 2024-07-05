import { useState } from "react";

import "./index.css";

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Cabins from "./pages/Cabins";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout></AppLayout>}>
          <Route path="/" element={<Dashboard></Dashboard>}></Route>
          <Route path="cabins" element={<Cabins />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
