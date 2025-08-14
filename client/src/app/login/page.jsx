"use client";
import Link from "next/link";
import "./login.css";
import { useState } from "react";
import { useAuth } from "@/contexts/ContextAuth";

const formBase = {
  username: "",
  pass: "",
};

export default function login() {
  const [form, setForm] = useState(formBase);
  const { login, messageLogin } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const submitLogin = (e) => {
    e.preventDefault();
    login(form);
    setForm(formBase);
  };

  return (
    <section className="form-login">
      {messageLogin && <div className="message">{messageLogin}</div>}
      <div className="form-box">
        <form className="form" onSubmit={submitLogin}>
          <span className="title">Iniciar sesión</span>
          <span className="subtitle">
            Ingresa tus datos para iniciar sesión
          </span>
          <div className="form-container">
            <input
              type="text"
              className="input"
              placeholder="Enter username"
              name="username"
              value={form.username}
              onChange={handleChange}
            />
            <input
              type="password"
              className="input"
              placeholder="Enter password"
              name="pass"
              value={form.pass}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Iniciar sesión</button>
        </form>
        <div className="form-section">
          <p>
            No tienes una cuenta?{" "}
            <Link href="/sign-up" className="link-form">
              Registrarse
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
