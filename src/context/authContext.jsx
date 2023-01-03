import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
// traer auth del archivo firebase
import { auth } from "../firebase";

// este si contiene el valor (user)
export const authContext = createContext();

// usar Auth
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no Auth provider");
  return context;
};

// permite acceder al valor desde cualquier lugar
// proveedor y crear objetos
export function AuthProvider({ children }) {
  // estado para contener las credenciales del usuario
  const [user, setuser] = useState(null);

  // loading para saber si esta cargando aun
  const [loading, setLoading] = useState(true);

  const singup = (email, password) =>
    // ejectuar funcion de firebase (pasar un auth, email, password)
    createUserWithEmailAndPassword(auth, email, password);

  // consulta a firebase
  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  // funcion para logout
  const logout = () => signOut(auth);

  // funcion para obtener las credenciales del usuario cada vez que cambia
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

      console.log(currentUser)

      // almacenar las credenciales del usuario actual
      setuser(currentUser);

      // despues de obtener las credenciales
      setLoading(false);
    });

    // ejecutar return cuando el componente es desmontado
    return () => unsubscribe();
  }, []);

  // exportar singup y login, user
  return (
    <authContext.Provider value={{ singup, login, user, logout, loading }}>
      {children}
    </authContext.Provider>
  );
}
