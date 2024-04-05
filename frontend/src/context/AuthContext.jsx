import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export const useAuthContext = () => {
  return useContext(AuthContext);
};
export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("Chat-User")) || null //here json parse string of chat-user into object of json
  );
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
