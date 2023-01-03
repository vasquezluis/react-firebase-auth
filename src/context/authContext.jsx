import { createContext, useContext } from "react";

// este si contiene el valor (user)
export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

// permite acceder al valor desde cualquier lugar
// proveedor y crear objetos
export function AuthProvider({ children }) {
  const user = {
    login: true,
    name: "luisvasquez",
  };

  return (
    <authContext.Provider value={{ user }}>{children}</authContext.Provider>
  );
}
