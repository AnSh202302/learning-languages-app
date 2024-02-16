import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import "./App.css";
import Layout from "./components/Layout";

const Home = lazy(() => import("./pages/HomePage"));
const Teachers = lazy(() => import("./pages/TeachersPage"));
const Favorites = lazy(() => import("./pages/FavoritesPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="teachers" element={<Teachers />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
}

export default App;
