import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import { axiosInstance } from "./util/axios";
import "./App.css";

function App() {
  const userData = {
    dni: "12345678Z",
    password: "123Abc99@",
  };

  const handleSubmit = async () => {
    

    try {
      const resp = await axiosInstance.post("/users/login", userData);
      console.log("data ", resp.data);
    } catch (error) {
      console.error(
        "Error en el login:",
        error.response?.data || error.message,
      );
      throw error;
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión </h2>

      <div id="error-message" className="error-box hidden" role="alert">
        El DNI o la contraseña no son correctos. Por favor, inténtalo de nuevo.
      </div>

      <form id="login-form" novalidate>
        <div className="form-group">
          <label for="dni">DNI / NIE</label>
          <input type="text" id="dni" name="dni" placeholder="12345678A" />
        </div>

        <div className="form-group">
          <label for="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="••••••••"
          />
        </div>

        <button type="button" className="btn-submit" onClick={handleSubmit}>
          Entrar
        </button>
      </form>
    </div>
  );
}

export default App;
