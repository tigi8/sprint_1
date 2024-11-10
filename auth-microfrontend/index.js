import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/Login"; // Импортируем основной компонент для входа
import "./styles/auth.css"; // Импортируем стили для аутентификации

const App = () => (
  <div>
    <h1>Authentication Microfrontend</h1>
    <Login /> {/* Рендеринг компонента входа */}
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
