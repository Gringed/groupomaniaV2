## Groupomania : Réseau social d'entreprise V1
### React / NodeJs / MySQL / Sequelize

_________________________

### Back config :

* Installation des dépendances nécessaire : `npm i -s bcrypt cookie-parser cors dotenv express jsonwebtoken multer mysql2 nodemon sequelize validator`

* Mettez vos informations de **Base de données** dans `/config/db.js`
* Créez le fichier `.env` dans `/config/` avec les données suivantes :
   - PORT=3001 `votre port localhost`
   - CLIENT_URL=http://localhost:3000 `votre URL client`
   - USER=root `votre identifiant`
   - PASSWORD= `votre mot de passe`
   - TOKEN_SECRET=1321345643035356457979243 `votre clé secrète aléatoire`
_________________________

### Front config : 

* Installation des dépendances nécessaire : `npm i -s axios dotenv js-cookie node-sass react-icons react-router-dom react-router-hash-link reactjs-popup redux`

* Dans le dossier /public , créer les dossiers : `img` , `uploads/posts` et  `uploads/profil`

* Dans le fichier `.env` vérifiez que les lignes suivantes sont bien présentes :
   - REACT_APP_API_URL=http://localhost:3000/ `l'url de votre serveur`
  
_____________________________

Démarrer le server : `npm start`

Démarrer le front : `cd client` + `npm start`

_____________________________
