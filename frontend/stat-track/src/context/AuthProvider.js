import React, { createContext, useState } from "react";
import useAxios from "../hooks/useAxios";

const defaultValues = {
  loading: false,
  accessToken: undefined,
  userDetails: undefined,
  error: { message: "", error: false },
  login: undefined,
};

export const AuthContext = createContext(defaultValues);

function AuthProvider({ children }) {
  const [loading, data, error, onLogin] = useAxios();
  const login = (data) => {
    var config = {
      method: "post",
      url: "http://localhost:4321/user/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    onLogin(config);
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        accessToken: data?.data?.accessToken,
        userDetails: data?.data?.userDetails,
        error,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
