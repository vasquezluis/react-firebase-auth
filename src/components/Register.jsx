import { useState } from "react";
// obtener useAuth
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({ email: "", password: "" });

  // guardar datos en el state
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  // obtener objeto singup
  const { singup } = useAuth();

  // usar useNavigate para ir al home despues del registro
  const navigate = useNavigate();

  // estado para manejar el mensaje de error y enviarlo al usuario
  const [error, setError] = useState('');

  // hacer algo con el submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      // ejecutar el singup y pasar user y pass
      await singup(user.email, user.password);

      // ir al home despues de registrar
      navigate("/");
    } catch (error) {
      console.log(error);
      // menejo de errores
      if (error.code === "auth/invalid-email") setError("Ingresa un email");
      else if (error.code === "auth/weak-password")
        setError("La contrase;a debe tener al menos 6 digitos.");
      else if (error.code === "auth/email-already-in-use")
        setError("Email ya registrado.");
    }
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

        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
