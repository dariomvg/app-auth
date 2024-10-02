import { router } from "../routes/routes.js";
import express from "express"; 
import cors from "cors"; 
const app = express(); 
const PORT = process.env.PORT ?? 4000; 

app.use(cors())
app.use(express.json()); 
app.use(router)


app.listen(PORT, () => console.log(`http://localhost:${PORT}`)); 

