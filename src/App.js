import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./style.css";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  return (
    <>
      <ErrorBoundary>
        <HashRouter>
          <Routes>
            <Route path="/" index element={<Login />} />
            <Route path="/feed" element={<Home />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </HashRouter>
      </ErrorBoundary>
    </>
  );
}
