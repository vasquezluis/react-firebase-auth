import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
// traer auth del archivo firebase
import { auth } from "../firebase";

// este si contiene el valor (user)
export const authContext = createContext();

// usar Auth
export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

// permite acceder al valor desde cualquier lugar
// proveedor y crear objetos
export function AuthProvider({ children }) {
  
  const singup = (email, password) =>
    // ejectuar funcion de firebase (pasar un auth, email, password)
    createUserWithEmailAndPassword(auth, email, password);

  // exportar singup
  return (
    <authContext.Provider value={{ singup }}>{children}</authContext.Provider>
  );
}
