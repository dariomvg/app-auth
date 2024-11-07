"use client";
import { checkSession, loginUser, logoutUser, signUpUser } from "@/helpers/helper";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const ContextAuth = createContext();

export const useAuth = () => {
  const context = useContext(ContextAuth);
  if (!context) throw new Error("Context insuficiente");
  return context;
};

export default function ProviderAuth({ children }) {
  const [username, setUsername] = useState("");
  const [messageLogin, setMessageLogin] = useState("");
  const [messageSign, setMessageSign] = useState("");
  const router = useRouter();

  const login = async (user) => {
    const data = await loginUser(user);
    if (!data.ok) {
      setMessageLogin(data.detail);
      return;
    }
    setUsername(data.username);
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

  const logOut = async () => {
    const data = await logoutUser();
    if (data.ok) {
      setUsername("");
      router.push("/");
    }
  };


  useEffect(() => {
    const checkUserSession = async () => {
      const data = await checkSession(); 
      if(!data.ok){
        return; 
      }
      setUsername(data.username); 
    }
    checkUserSession(); 
  }, []);


  return (
    <ContextAuth.Provider
      value={{
        username,
        login,
        signUp,
        logOut,
        setMessageSign,
        messageSign,
        messageLogin,
      }}>
      {children}
    </ContextAuth.Provider>
  );
}
