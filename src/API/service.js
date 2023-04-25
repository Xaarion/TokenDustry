const express = require('express'), mysql = require('mysql'), port = (process.env.PORT || process.env.ALWAYSDATA_HTTPD_PORT || 8100), cors = require('cors');


// Créer une connexion à la base de données
const connection = mysql.createConnection({
  host: 'mysql-apitokendustry.alwaysdata.net',
  user: '310418_badmin',
  password: 'StuckSilver2ForEver',
  database: 'apitokendustry_db'
});
// Créer une application Express
const app = express();

app.use(cors({origin:'*'}));
// Endpoint pour récupérer tous les utilisateurs
app.get('/users', (req, res) => {
  // Exécuter la requête SQL pour récupérer tous les utilisateurs
  const sql = 'SELECT * FROM Utilisateurs;';
  connection.query(sql, (error, results) => {
    if (error) throw error;
      res.json(results);
    });
});


  app.get('/crypto', (req, res) => {
    // Exécuter la requête SQL pour récupérer tous les utilisateurs
    const sql = 'SELECT * FROM Cryptomonnaies;';
    connection.query(sql, (error, results) => {
      if (error) throw error;
      res.json(results);
    });
  });

  
  

// Démarrer le serveur sur le port 3000
app.listen(port, () => {
  console.log('Serveur démarré sur le port de ALWAYSDATA' + port);
});
