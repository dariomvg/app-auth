const {
    HOST = "localhost",          // host de postgres
    PORT_DB = 5432,             // puerto de postgres
    DATABASE = "db_auth",       // nombre de la base de datos
    USERNAME = "****",      // usuario de postgres
    PASSWORD = "****",         // contraseña de postgres
    SECRET_WORD = "***", // palabra secreta para jwt
    PORT = 4000,               // puerto de la aplicación
    CLIENT_URL = "http://localhost:3000" // URL del cliente
} = process.env;


export const host = HOST;
export const port = PORT_DB;
export const database = DATABASE;
export const username = USERNAME;
export const password = PASSWORD;
export const secret_word = SECRET_WORD;
export const PORT_APP = PORT;
export const url_client = CLIENT_URL;


