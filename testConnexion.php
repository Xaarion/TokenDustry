
<?php

   $hote = 'localhost';
   $utilisateur = 'bellone_admin';
   $mdp = 'StuckSilver2ForEver';
   $nombdd = 'bellone_tokendustry'; // Nom de la base de données
   $bdd = new PDO("mysql:host=$hote;dbname=$nombdd", $utilisateur, $mdp);
   $requete = $bdd->prepare("SELECT pseudonyme FROM Utilisateurs WHERE id = 2");
   $requete->execute();
   $reponse = $requete->fetch(PDO::FETCH_ASSOC);
   $count = $reponse['pseudonyme'];

         echo $count
?>

