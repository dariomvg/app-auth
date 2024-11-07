import { router } from "../routes/routes.js";
import express from "express"; 
import cors from "cors"; 
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { PORT } from "../utils/credentials.db.js";
const app = express(); 

dotenv.config(); 
app.use(cors({
    origin: "http://localhost:3000", 
    credentials: true, 
  }))
app.use(express.json()); 
app.use(cookieParser()); 
app.use(router)


app.listen(PORT, () => console.log(`http://localhost:${PORT}`)); 

