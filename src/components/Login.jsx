import { useState } from "react";
// obtener useAuth
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });

  // obtener objeto singup
  const { login } = useAuth();

  // usar useNavigate para ir al home despues del registro
  const navigate = useNavigate();

  // estado para manejar el mensaje de error y enviarlo al usuario
  const [error, setError] = useState("");

  // hacer algo con el submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      // ejecutar el singup y pasar user y pass
      await login(user.email, user.password);

      // ir al home despues de registrar
      navigate("/");
    } catch (error) {
      console.log(error);
      // menejo de errores
      setError(error.message);
    }
  };

  // guardar datos en el state
  const handleChange = ({ target: { value, name } }) => {
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Your email@company.ltd"
          onChange={handleChange}
        />

        <label htmlFor="passwod">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="******"
          onChange={handleChange}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
