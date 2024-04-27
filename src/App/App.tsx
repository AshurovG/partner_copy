import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import MainPage from "pages/MainPage";
import Header from "components/Header";
import Footer from "components/Footer";
import ItemPage from "pages/ItemPage";
import AuthPage from "pages/AuthPage";
import CategoryPage from "pages/CategoryPage";

const App = () => {
  return (
    <div className="app">
      <HashRouter>
        <>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/:categoryKey/*" element={<CategoryPage />} />
            <Route path="/:categoryKey/:itemId" element={<ItemPage />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </>
      </HashRouter>
      <ToastContainer autoClose={1500} pauseOnHover={false} />
    </div>
  );
};

export default App;
