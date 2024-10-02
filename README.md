# Aplicación de manejo de login, autenticación, etc.

### Notas:
- NO está desplegada en ningún sitio
- Está creada con PostgreSQL(Base de datos), NextJS(Front-end) y ExpressJS(servidor)


## 1- Inicializar proyecto  

1- clonar repositorio

```js
git clone https://github.com/dariomvg/app-auth.git
```
2- instalar dependencias

```js
cd nombre-repositorio
```

```js
npm install
```

3- ingresar a client e instalar dependencias

```js
cd nombre-repositorio/client
```

```js
npm install
```
## 2- Back-end

### Necesitas crear las bases de datos, con postgreSQL: 

```js
CREATE DATABASE db_auth;
);
```

```js
CREATE TABLE users_auth(  
    id SERIAL NOT NULL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
);
```

```js
SELECT * FROM users_auth
```

### En el archivo credential.js en utils , está la configuración de la base de datos, debes reemplazar con tus datos:


## 3- Visitar

### En la raiz del proyecto y en client ejecutar:

```js
    npm run dev
```
### visitar: http://localhost:5173
