import React from "react";
import ReactDOM from "react-dom";
import Profile from "./components/Profile"; // Импорт основного компонента профиля
import "./styles/profile.css"; // Импорт стилей профиля (если есть)

const App = () => (
  <div>
    <h1>Profile Microfrontend</h1>
    <Profile /> {/* Рендеринг компонента профиля */}
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
