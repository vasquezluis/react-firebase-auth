import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

function ProtectedRoutes({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <h1>Loading</h1>;

  // si el usuario es null, redireccionar al login
  if (!user) return <Navigate to="/login" />;

  // la ruta protegida puede retornar muchos hijos
  return <>{children}</>;
}

export default ProtectedRoutes;
