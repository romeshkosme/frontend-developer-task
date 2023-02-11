import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./style.css";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  return (
    <>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
              <Route path="/feed" element={<Home />} />
              <Route path="/" index element={<Login />} />
              <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
}
