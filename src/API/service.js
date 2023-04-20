const express = require('express');
const mysql = require('mysql');

// Créer une connexion à la base de données
const connection = mysql.createConnection({
  host: 'mysql-bellone.alwaysdata.net',
  user: 'bellone_admin',
  password: 'StuckSilver2ForEver',
  database: 'bellone_tokendustry'
});
// Créer une application Express
const app = express();
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
app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});
