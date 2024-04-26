import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { useIsAuth, setIsAuthAction } from "slices/AuthSlice";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import MainPage from "pages/MainPage";
import Header from "components/Header";
import Footer from "components/Footer";
// import ContactForm from "components/ContactForm";
import ItemPage from "pages/ItemPage";
import AuthPage from "pages/AuthPage";
import CategoryPage from "pages/CategoryPage";
import AdminPage from "pages/AdminPage";
import AdminProductPage from "pages/AdminProductPage";

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useIsAuth();
  const token = localStorage.getItem("token");
  const [isCheckLoading, setIsCheckLoading] = useState(true);
  const getIsAuth = async () => {
    setIsCheckLoading(true);
    try {
      await axios("https://partnerev.ru/api/check", {
        method: "POST",
        data: {
          token,
        },
      });
      dispatch(setIsAuthAction(true));
      setIsCheckLoading(false);
    } catch (error) {
      setIsCheckLoading(false);
      throw error;
    }
  };

  useEffect(() => {
    if (token) {
      getIsAuth();
    } else {
      setIsCheckLoading(false);
    }
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        {isCheckLoading ? (
          <h3>Загрузка</h3> // TODO: В последствии поставить лоадер
        ) : (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<MainPage />}></Route>
              <Route path="/:categoryKey/*" element={<CategoryPage />} />
              <Route path="/:categoryKey/:itemId" element={<ItemPage />} />
              {isAuth && (
                <>
                  <Route path="/admin" element={<AdminPage />} />
                  <Route path="/products/">
                    <Route path=":id" element={<AdminProductPage />} />
                  </Route>
                </>
              )}

              {/* <Route path="/:item" element={<ItemPage />}></Route> */}
              {!isAuth && <Route path="/login" element={<AuthPage />} />}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            {/* <ContactForm /> */}
            <Footer />
          </>
        )}
      </BrowserRouter>
      <ToastContainer autoClose={1500} pauseOnHover={false} />
    </div>
  );
};

export default App;
