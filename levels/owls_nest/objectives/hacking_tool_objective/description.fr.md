<%
const worldState = levelState['com.twilioquest.owls_nest'];
%>

# Découverte de l'interface de Hack

<div class="aside">
<h3>À faire</h3>
<ul>
  <li>Récupérer l'outil de piratage sur un piédestal dans cette pièce.</li>
  <li>Trouver le code d'accès secret dans l'onglet « Objective » (écran actuel).</li>
  <li>Saisir le code d'accès dans le champ sur la droite et cliquer sur <em>HACK</em> (PIRATER).</li>
</ul>
</div>
L'univers de TwilioQuest est rempli d'**objets piratables**, comme ce terminal. Avec l'outil de piratage de pointe développé par le programme TwilioQuest, vous pouvez contourner la sécurité de ces objets en relevant des défis techniques (et non techniques). Vous allez devoir répondre à des questions, écrire du code dans un fichier sur votre ordinateur et bien d'autres challenges&nbsp;!

Pour relever ce défi, vous devez **vous procurer l'outil de piratage situé sur un piédestal dans cette pièce**. Le code d'accès permettant d'ouvrir la barrière laser apparaîtra alors dans l'encadré ci-dessous. Saisissez le code d'accès dans la barre de texte à droite et cliquez sur *HACK* (PIRATER) pour éteindre la barrière laser.

<style>
.passcode {
  color: #eee;
  padding: 10px;
  text-align: center;
}

.passcode h3 {
  font-size: 1.5em;
  border-bottom: none;
  padding: 0;
  margin: 0 0 10px 0;
  font-weight: bold;
  text-transform: uppercase;
}

.passcode p {
  margin: 0 0 5px 0;
  padding: 0;
}

.passcode-locked {
  border: 5px solid #8B0000;
  background-color: #DC143C;
}

.passcode-open {
  border: 5px solid #8FBC8F;
  background-color: #7FFF00;
  color: #232323;
}
</style>
<% if (worldState.hackingToolAcquired) { %>

<div class="passcode passcode-open">
<h3>CODE D'ACCÈS DISPONIBLE</h3>
<p>
Code de déverrouillage de la barrière laser : <b>LEVEL UP</b>
</p>
<p>
<i>Saisissez ce code dans la barre de texte à droite et cliquez sur « HACK » (PIRATER)</i>
</p>
</div>
<% } else { %>
<div class="passcode passcode-locked">
<h3>CODE D'ACCÈS VERROUILLÉ</h3>
<p>
Pour contourner la sécurité de ce système et déverrouiller le mot de passe, vous avez besoin de l'outil de piratage. <b>Il se trouve sur un piédestal
dans cette pièce</b>.
</p>
</div>
<% } %>
