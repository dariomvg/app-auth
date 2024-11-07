export const host = process.env.HOST ?? "localhost";        // colocar tu host de postgres
export const port = process.env.PORT_DB ??  5432;             // colocar tu puerto de postgres
export const database = process.env.DATABASE ??  "db_auth";   // nombre de la base de datos
export const username = process.env.USERNAME ??  "****";     // colocar tu usuario de postgres
export const password = process.env.PASSWORD ??  "****";     // colocar tu contraseña de postgres
export const secret_word = process.env.SECRET_WORD ??  "****" // colocar tu palabra secreta para jwt
export const PORT = process.env.PORT ?? 4000;         // puerto de tu aplicación


