"use client";
import Link from "next/link";
import "./header.css";
import { useAuth } from "@/contexts/ContextAuth";

export const Header = () => {
  const { username, logOut } = useAuth();
  return (
    <header className="header">
      <Link href="/" className="link-header">
        Principal
      </Link>
      <Link href="/docs" className="link-header">
        Docs
      </Link>
      {username ? (
        <>
          <button onClick={logOut} className="btn-logout">
            Cerrar sesión
          </button>
          <div className="user">
            <p className="title-user">{username}</p>
            <div className="line-user"></div>
          </div>
        </>
      ) : (
        <>
          <Link href="/login" className="link-header">
            Iniciar sesión
          </Link>
          <Link href="/sign-up" className="link-header">
            Registrarse
          </Link>
        </>
      )}
    </header>
  );
};
