import React from "react";
import { AuthProviderProps, childrenProps } from "../types";
import axios from "axios";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = React.createContext({} as AuthProviderProps);

const AuthProvider = ({ children }: childrenProps) => {
  
  const [authToken, setAuthToken] = React.useState<any>();
  const [storageLoginLoad, setStorageLoginLoad] = React.useState<boolean>(true);

  React.useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");

      if (storedToken) {
        setAuthToken(storedToken);
        setStorageLoginLoad(false);
      } else {
        setStorageLoginLoad(false);
      }
    }

    fetchToken();
  }, []);

  async function createUser(
    email: string,
    password: string,
    displayName: string
  ) {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`,
      {
        email,
        password,
        displayName,
        returnSecureToken: true,
      }
    );
    authenticate(response?.data.idToken);
    AsyncStorage.setItem("token", response?.data.idToken);
  }

  async function login(email: string, password: string) {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`,
      {
        email,
        password,
        returnSecureToken: true,
      }
    );
    authenticate(response?.data.idToken);
    AsyncStorage.setItem("token", response?.data.idToken);
  }

  function authenticate(token: any) {
    setAuthToken(token);
  }

  function logout() {
    setAuthToken(null);
    AsyncStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider
      value={{
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate,
        logout,
        createUser,
        login,
        storageLoginLoad,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
