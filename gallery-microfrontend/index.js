import React from "react";
import ReactDOM from "react-dom";
import Gallery from "./components/Gallery"; // Импорт основного компонента галереи
import "./styles/gallery.css"; // Импорт стилей для галереи

const App = () => (
  <div>
    <h1>Gallery Microfrontend</h1>
    <Gallery /> {/* Рендеринг компонента галереи */}
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
