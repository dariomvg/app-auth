"use client";
import { loginUser, signUpUser } from "@/helpers/helper";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const ContextAuth = createContext();

export const useAuth = () => {
  const context = useContext(ContextAuth);
  if (!context) throw new Error("Context insuficiente");
  return context;
};

export default function ProviderAuth({ children }) {
  const [username, setUsername] = useState({});
  const [messageLogin, setMessageLogin] = useState("");
  const [messageSign, setMessageSign] = useState("");
  const [initialized, setInitialized] = useState(false); 
  const router = useRouter();

  const login = async (user) => {
    const data = await loginUser(user);
    if (!data.ok) {
      setMessageLogin(data.detail);
      return;
    }
    setUsername(data);
    router.push("/");
  };

  const signUp = async (user) => {
    const data = await signUpUser(user);
    if (!data.ok) {
      setMessageSign(data.detail);
      return;
    }
    router.push("/login");
  };

  const logOut = () => {
    setUsername({});
    router.push("/");
  };

  useEffect(() => {
    const user = localStorage.getItem("username");
    if (user) {
      setUsername(JSON.parse(user));
    };
    setInitialized(true);
  }, []);

  if (initialized) {
    if (username && username.token) {
      localStorage.setItem("username", JSON.stringify(username));
    } else {
      localStorage.removeItem("username");
    }
  }

  return (
    <ContextAuth.Provider
      value={{ username, login, signUp, logOut, setMessageSign, messageSign, messageLogin  }}>
      {children}
    </ContextAuth.Provider>
  );
}
