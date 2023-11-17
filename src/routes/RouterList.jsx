import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TokenProtected from "../assets/components/ProtectedComponents/TokenProtected";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import ReduxAllMovies from "../pages/ReduxAllMovies";
import ReduxDetailPage from "../pages/ReduxDetailPage";
import ReduxSearchPage from "../pages/ReduxSearchPage";
import ReduxDashboard from "../pages/ReduxDashboard";
import TokenProtectedSearch from "../assets/components/ProtectedComponents/TokenProtectedSearch";
import TokenProtectedDetail from "../assets/components/ProtectedComponents/TokenProtectedDetail";
import TokenProtectedAllMovies from "../assets/components/ProtectedComponents/TokenProtectedAllMovies";
import Chapter7Dashboard from "../pages/Chapter7Dashboard";

const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chapter7Dashboard />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/home"
          element={
            <TokenProtected>
              <ReduxDashboard />
            </TokenProtected>
          }
        />
        <Route
          path="/movie-list"
          element={
            <TokenProtectedAllMovies>
              <ReduxAllMovies />
            </TokenProtectedAllMovies>
          }
        />
        <Route
          path="/search/:title"
          element={
            <TokenProtectedSearch>
              <ReduxSearchPage />
            </TokenProtectedSearch>
          }
        />
        <Route
          path="/:id"
          element={
            <TokenProtectedDetail>
              <ReduxDetailPage />
            </TokenProtectedDetail>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterList;
