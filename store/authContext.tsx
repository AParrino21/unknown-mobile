import React from "react";
import { AuthProviderProps, childrenProps } from "../types";
import axios from "axios";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = React.createContext({} as AuthProviderProps);

const AuthProvider = ({ children }: childrenProps) => {
  const server = __DEV__ ? "http://localhost:3001" : "prod";

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
    displayName: string,
    avatar: string
  ) {
    const response = await axios.post(`${server}/api/unknownM/createUser`, {
    // const response = await axios.post(
    //   "https://fww9stggsd.execute-api.us-east-1.amazonaws.com/dev/signup",
    //   {
        email,
        password,
        displayName,
        avatar,
        returnSecureToken: true,
      }
    );
    authenticate(response?.data.idToken);
    AsyncStorage.setItem("token", response?.data.idToken);
  }

  async function login(email: string, password: string) {
    const response = await axios.post(`${server}/api/unknownM/login`, {
    // const response = await axios.post(
    //   "https://fww9stggsd.execute-api.us-east-1.amazonaws.com/dev/login",
    //   {
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

//   async function getAllUsersData() {
//     const response = await axios.get('https://fww9stggsd.execute-api.us-east-1.amazonaws.com/dev/get-user')

//     console.log(response?.data.Items)
//   }

//   React.useEffect(() => {
//     getAllUsersData()
//   }, [])

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
