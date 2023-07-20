import React, {lazy} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from "./LoginScreen";
import Header from "./Header";
import Footer from "./Footer";

const Home = lazy(() => import("./menu/MenuPage"));

const App = () => {
  return (
    <div>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={LoginScreen} />
          <Route path="/menu" exact Component={Home} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
};

export default App;
