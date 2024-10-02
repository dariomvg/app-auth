"use client";
import Link from "next/link";
import "./sign-up.css";
import { useState } from "react";
import { useAuth } from "@/contexts/ContextAuth";

const formBase = {
  username: "",
  pass: "",
};

export default function SignUp() {
  const [form, setForm] = useState(formBase);
  const { signUp, setMessageSign, messageSign } = useAuth();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitSignUp = (e) => {
    e.preventDefault();
    if (form.username.length > 10 || form.username.length < 4) {
      setMessageSign("El nombre de usuario debe ser de 4 a 10 caracteres");
      return; 
    };
    if (form.pass.length > 6 || form.pass.length < 4) {
      setMessageSign("La contraseña debe ser de 4 a 6 caracteres");
      return; 
    };
    signUp(form);
    setForm(formBase);
  };

  return (
    <section className="form-sign">
      <div className="form-box">
        <form className="form" onSubmit={submitSignUp}>
          <span className="title">Regístrarse</span>
          <span className="subtitle">
            Crea una cuenta gratís con un nombre de usuario
          </span>
          {messageSign && <div className="message">{messageSign}</div>}
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
          <button type="submit">Regitrarse</button>
        </form>
        <div className="form-section">
          <p>
            Ya tienes cuenta?
            <Link href="/login" className="link-form">
              Iniciar sesión
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
