import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { findUser, insertUser, selectUser } from "../libs/handle_database.js";
import { secret_word } from "../utils/credentials.db.js";
import { responses } from "../utils/responses.js";

export const router = Router();

router.get("/check-session", (req, res) => {
  const token = req.cookies.sessionToken;
  if (!token) return res.json(responses.noSession);

  jwt.verify(token, secret_word, (err, decoded) => {
    if (err) return res.json(responses.invalidToken);
    return res.json({ ...responses.loginSuccess, username: decoded.username });
  });
});

router.post("/sign-up", async (req, res) => {
  const { username, pass } = req.body;
  const foundUsername = await findUser(username);
  if (foundUsername) {
    return res.json(responses.userExists);
  }
  const password = await bcrypt.hash(pass, 10);
  const data = await insertUser(username, password);

  if (data.username) {
    return res.json(responses.userCreated);
  }
});

router.post("/login", async (req, res) => {
  const { username, pass } = req.body;
  const foundUser = await selectUser(username);

  if (!foundUser) {
    return res.json(responses.userNotFound);
  }
  const comparePassword = await bcrypt.compare(pass, foundUser.password);

  if (!comparePassword) {
    return res.json(responses.invalidPassword);
  } else {
    jwt.sign(
      { id: foundUser.id, username: foundUser.username },
      secret_word,
      { expiresIn: "3d" },
      (err, token) => {
        if (err) {
          return res.json(responses.loginFailed);
        } else {
          res
            .cookie("sessionToken", token, {
              httpOnly: true,
              secure: false, // 'false' para que funcione en desarrollo o 'true' para produccion con una variable de entorno
              sameSite: "lax",
            })
            .json({
              ...responses.loginSuccess,
              username: foundUser.username,
            });
        }
      }
    );
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("sessionToken").json(responses.sessionClosed);
});
