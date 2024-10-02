import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { findUser, insertUser, selectUser } from "../libs/handle_database.js";
export const router = Router();

router.post("/sign-up", async (req, res) => {
  const { username, pass } = req.body;
  const foundUsername = await findUser(username);
  if (foundUsername) {
    return res.json({ ok: false, detail: "Nombre de usuario ya registrado" });
  }
  const password = await bcrypt.hash(pass, 10);
  const data = await insertUser(username, password)
  
  if (data.username) {
    return res.json({ ok: true, detail: "Usuario ingresado" });
  }
});

router.post("/login", async (req, res) => {
  const { username, pass } = req.body;
  const foundUser = await selectUser(username); 

  if (!foundUser.username) {
    return res.json({ ok: false, detail: "Usuario no registrado" });
  }
  const comparePassword = await bcrypt.compare(pass, foundUser.password);

  if (!comparePassword) {
      return res.json({ ok: false, detail: "Usuario o contraseña incorrecta" });
  } else {
    jwt.sign({id: foundUser.id}, "abcde12345secret", (err, token) => {
      if (err) {
        return res.json({ ok: false, detail: "No se pudo iniciar sesión" });
      } else {
        return res.json({ok: true, username: foundUser.username, token});
      }
    });
  }
});
