# Skill Alexa UAM

Desarrollo de una skill de Alexa para la UAM.
 
Haciendo uso de una API, en la cual se realizaran las consultas de información que se mostraran en nuestra Skill.

## API REST
### installation and Dependencies

```bash
npm init --y
```
```bash
npm i express morgan --save
```

```bash
npm i cors dotenv multer --save
```

```bash
npm i nodemon -D
```

### Run API
La forma para correr la API, una vez ya teniendo `{nodemon}` instalado este reiniciara el servidor automáticamente.

En nuestro `{package.json}`, podemos que ya tenemos nodemon dentro de nuestras dependencias, en la sección de scripts vamos se creo un nuevo comando el cual ejecutara nodemon: `{"dev": "nodemon src/app.js"}`
```json
{
  "name": "skill-alexa-uam",
  "version": "1.0.0",
  "description": "Desarrollo de una skill de Alexa para la UAM",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon src/app.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "morgan": "^1.10.0",
    "multer": "^1.4.5-lts.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.2"
  }
}

```

Con esa confiduración ya hecha la forma para correr nuestra API es:
```bash
npm run dev
```

### Consultas
Reemplazar `{info}` con la palabra de la información que se requiera.

#### Admisión
`http://localhost:4006/api/admision`<br>
`http://localhost:4006/api/admision/infoadmision/{info}`

### Dirección de la API
http://localhost:{port}

sustituir {port} por el puerto que indique la consola.