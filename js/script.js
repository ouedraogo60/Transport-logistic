
// fonction inscription d'un utilisateur (admin ou client)
function incrireUtilisateur(x) {
  var nom = document.getElementById('nom').value;
  var verifNom = nom.length < 2;
  affichageErreur(verifNom, "nomErreur", "nom doit avoir au moins 2 caractères");

  var prenom = document.getElementById('prenom').value;
  verifPrenom = prenom.length < 2;
  affichageErreur(verifPrenom, "prenomErreur", "prenom doit avoir au moins 2 caractères");

  var email = document.getElementById('email').value;
  // var isEmailUnique = checkUniqueEmail(email);
  var verifEmail = (validateEmail(email));
  affichageErreur(!verifEmail, 'emailErreur', "Votre adresse email n'est pas valide");

  var password = document.getElementById('password').value;
  var verifPassword = password.length < 8;
  affichageErreur(verifPassword, 'password', "Mot de passe doit avoir au moins 8 caractères");

  var telephone = document.getElementById('telephone').value;
  var verifTelephone = validateNumber(telephone);
  affichageErreur(!verifTelephone, 'telephoneErreur', "Le telehone  doit avoir 8 chiffres ");

  var adresse = document.getElementById('adresse').value;
  var verifAdresse = adresse.length < 2;
  affichageErreur(!verifAdresse, 'adresseErreur', "Adresse doit avoir au moins 6 caractères");

  if (!verifNom && !verifPrenom && verifEmail && !verifPassword && verifTelephone && !verifAdresse) {


    var utilisateurId = JSON.parse(localStorage.getItem("utilisateurId") || "1");
    var utilisateur = {
      id: Number(utilisateurId),
      nom: nom,
      prenom: prenom,
      email: email,
      password: password,
      telephone: telephone,
      adresse: adresse,
      role: x

    };
    var T = JSON.parse(localStorage.getItem('utilisateurs') || '[]');
    T.push(utilisateur);
    localStorage.setItem('utilisateurs', JSON.stringify(T));
    localStorage.setItem("utilisateurId", Number(utilisateurId) + 1);
  }
}

function validateNumber(str) {
  if (typeof str != 'string') return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
}

// validation de l'email
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Fonction pour affichage des erreurs
function affichageErreur(condition, idError, msg) {
  if (condition) {
    document.getElementById(idError).innerHTML = msg;
    document.getElementById(idError).style.color = 'red';

  } else {
    document.getElementById(idError).innerHTML = "";
  }
}

// Fonction pour verifier l'unique email

function checkUniqueEmail(email) {
  var utilisateur = JSON.parse(localStorage.getItem('utilisateurs') || '[]');
  var chercherUtilisateur = false;
  for (let i = 0; i < utilisateur.length; i++) {
    if (utilisateurs[i].email == email) {

      chercherUtilisateur = true;
    }
  }
  return chercherUtilisateur;

}

// Fonction pour inscrire un transporteur
function incrireTransporteur() {
  var numeroImmatriculation = document.getElementById('numeroImmatriculation').value;
  var verifNumeroImmatriculation = numeroImmatriculation.length < 4;
  affichageErreur(verifNumeroImmatriculation, "numeroImmatriculationErreur", " Le numero d'Immatriculation doit avoir au moins 4 caractères");

  var marque = document.getElementById('marque').value;
  var verifMarque = marque.length < 2;
  affichageErreur(verifMarque, 'marqueErreur', "Veuillez saisir la marque du véhicule");

  var type = document.getElementById('type').value;
  var verifType = type.length < 2;
  affichageErreur(verifType, 'typeErreur', "Veuillez saisir le type du véhicule");


  var largeur = document.getElementById('largeur').value;
  var verifLargeur = largeur.length < 0;
  affichageErreur(verifLargeur, 'largeurErreur', "Veuillez saisir la largeur du véhicule");

  var longueur = document.getElementById('longueur').value;
  var verifLongueur = longueur.length < 0;
  affichageErreur(verifLongueur, 'longueurErreur', "Veuillez saisir la longueur du véhicule");

  var hauteur = document.getElementById('hauteur').value;
  var verifHauteur = hauteur.length < 0;
  affichageErreur(verifHauteur, 'hauteurErreur', "Veuillez saisir la hauteur du véhicule");

  var charge = document.getElementById('charge').value;
  var verifCharge = charge.length < 0;
  affichageErreur(verifCharge, 'chargeErreur', "Veuillez saisir la charge utile du véhicule");

  var ville = document.getElementById('ville').value;
  var verifVille = ville.length < 1;
  affichageErreur(verifVille, 'villeErreur', "Veuillez saisir la ville ou se trouve véhicule");

  var password = document.getElementById('password').value;
  var verifPassword = password.length < 8;
  affichageErreur(verifPassword, 'passwordErreur', "Mot de passe doit avoir au moins 8 caractères");


  if (!verifNumeroImmatriculation && !verifMarque && !verifType && !verifLargeur && !verifLongueur && !verifHauteur && !verifCharge && !verifVille && !verifPassword) {


    var transporteurId = JSON.parse(localStorage.getItem("transporteurId") || "1");
    var transporteur = {
      id: Number(transporteurId),
      numeroImmatriculation: numeroImmatriculation,
      marque: marque,
      type: type,
      largeur: largeur,
      longueur: longueur,
      hauteur: hauteur,
      charge: charge,
      ville: ville,
      password: password,


    };
    var T = JSON.parse(localStorage.getItem('transporteurs') || '[]');
    T.push(transporteur);
    localStorage.setItem('transporteurs', JSON.stringify(T));
    localStorage.setItem("transporteurId", Number(transporteurId) + 1);
  }
}


// function validation du login
function validateLogin() {
  var objectsLogin = JSON.parse(localStorage.getItem('utilisateurs') || '[]');
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  for (let i = 0; i < objectsLogin.length; i++) {
    if (email == objectsLogin[i].email && password == objectsLogin[i].password) {
      document.getElementById('passwordErreur').innerHTML = 'you are log';
    } else {
      document.getElementById('passwordErreur').innerHTML =
        'adresse email et le mot de passe que vous avez entrés ne correspondent pas à ceux présents dans nos fichiers.Veuillez vérifier et réessayer.';
      document.getElementById('passwordErreur').style.color = 'red';
    }
  }
}


// fonction connecter pour utilisateur
function meConnecter() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var utilisateur = searchUserByEmailAndPwd(email, password);
  if (utilisateur) {
    localStorage.setItem('connectUtilisateur', utilisateur.id);
    if (utilisateur.role == 'admin') {
      location.replace('administration.html');
    } else {
      location.replace('listeTransporteur.html');

    }
  }

}


// fonction Login pour transporteur
function mConnecter() {

  var im = document.getElementById('numeroImmatriculation').value;
  var pwd = document.getElementById('password').value;
  var transporteur = JSON.parse(localStorage.getItem('transporteurs') || '[]');
  for (let i = 0; i < transporteur.length; i++) {

    if ((transporteur[i].numeroImmatriculation == im) && (transporteur[i].password == pwd)) {
      location.replace('profil.html');
      localStorage.setItem('transporteurConnect', transporteur[i].id);
    }

  }

}

function searchUserByEmailAndPwd(email, pwd) {
  var utilisateurs = JSON.parse(localStorage.getItem('utilisateurs') || '[]');
  var rechercheUtilisateur;
  for (let i = 0; i < utilisateurs.length; i++) {
    if (utilisateurs[i].email == email && utilisateurs[i].password == pwd) {
      rechercheUtilisateur = utilisateurs[i]
    }
  }
  return rechercheUtilisateur;
}



// fonction pour affichage pour client dans l'administration
function affichageutilisateur() {
  var utilisateurs = JSON.parse(localStorage.getItem('utilisateurs') || '[]');
  var utilisateurTable = `
  <table class="table">
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Nom</th>
    <th scope="col">Prenom</th>
    <th scope="col">Email</th>
    <th scope="col">Password</th>
    <th scope="col">Telephone</th>
    <th scope="col">Adresse</th>
    <th scope="col">Action</th>
  </tr>
</thead>
<tbody>`;
  for (let i = 0; i < utilisateurs.length; i++) {
    utilisateurTable = utilisateurTable + `
  <tr>
    <th scope="row">${utilisateurs[i].id}</th>
    <td>${utilisateurs[i].nom}</td>
    <td>${utilisateurs[i].prenom}</td>
    <td>${utilisateurs[i].email}</td>
    <td>${utilisateurs[i].password}</td>
    <td>${utilisateurs[i].telephone}</td>
    <td>${utilisateurs[i].adresse}</td>
    <td><button type="submit"  onclick ="deleteObject(${i},'utilisateur')" class="btn btn-danger">Supprimer</button></td>

  </tr>`
  }
  utilisateurTable = utilisateurTable +
    `</tbody>
</table>`;

  document.getElementById('utilisateur').innerHTML = utilisateurTable;

}

// function pour remplir les infos de la reservation
function commandeVehicule(id) {
  localStorage.setItem('idPrToCommande', id);
  location.replace('reservation.html');
}

// fonction pour afficher les transporteurs inscrits ou partenaires
function affichageTransporteurs() {
  var transporteurs = JSON.parse(localStorage.getItem('transporteurs') || '[]');
  var transporteurTable = `
  <table class="table">
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Immatriculation</th>
    <th scope="col">Marque</th>
    <th scope="col">Type</th>
    <th scope="col">Largeur</th>
    <th scope="col">Longueur</th>
    <th scope="col">hauteur</th>
    <th scope="col">charge</th>
    <th scope="col">Ville</th>
    <th scope="col">mot de passe</th>
    <th scope="col">Action</th>
  </tr>
</thead>
<tbody>`;
  for (let i = 0; i < transporteurs.length; i++) {
    transporteurTable = transporteurTable + `
  <tr>
    <th scope="row">${transporteurs[i].id}</th>
    <td>${transporteurs[i].numeroImmatriculation}</td>
    <td>${transporteurs[i].marque}</td>
    <td>${transporteurs[i].type}</td>
    <td>${transporteurs[i].largeur}</td>
    <td>${transporteurs[i].longueur}</td>
    <td>${transporteurs[i].hauteur}</td>
    <td>${transporteurs[i].charge}</td>
    <td>${transporteurs[i].ville}</td>
    <td>${transporteurs[i].password}</td>
    <td><button type="submit"  onclick ="deleteObject(${i}, 'transporteurs')" class="btn btn-danger">Supprimer</button></td>

  </tr>`
  }
  transporteurTable = transporteurTable +
    `</tbody>
</table>`;

  document.getElementById('transporteurs').innerHTML = transporteurTable;

}

//function choisir ou commander un camion
function listeTransporteur() {
  var transporteurs = getObjetsFromLocalStorage('transporteurs');
  var prDiv = '';
  for (let i = 0; i < transporteurs.length; i++) {
    prDiv = prDiv + `
    <div class="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                    <div class="featured__item">
                        <div class="featured__item__pic set-bg" data-setbg="img/featured/feature-5.jpg">
                        </div>
                        <div class="featured__item__text">
                            <h6>${transporteurs[i].type}</h6>
                            <h5>${transporteurs[i].ville}/TUNISIE</h5>  
                            <h5>${transporteurs[i].charge} KG</h5>
                            <h5>${transporteurs[i].longueur} M</h5>
                            <button type='submit'  class="site-btn" onclick="commandeVehicule(${transporteurs[i].id})">Choisir</button> 
                        </div>
                    </div>
                   
                </div>`;

  }
  document.getElementById('commande').innerHTML = prDiv;
}

function getObjetsFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key) || '[]');
}

// fonction pour placer l'utilisateur dans la page reservation.html après avoir clicqué sur choisir
function commandeVehicule(id) {
  localStorage.setItem('idPrToCommande', id);
  location.replace("reservation.html");
}

function searchById(key, id) {

  var objects = getObjetsFromLocalStorage(key, id);
  var findedObject;
  for (var i = 0; i < objects.length; i++) {
    if (objects[i].id == id) {
      findedObject = objects[i];
    }
  }
  return (findedObject);

}

// fonction pour voir en détails les infos des transporteurs
function affichageCommande() {
  var idPrToCommande = localStorage.getItem('idPrToCommande');
  var transporteur = searchById('transporteurs', idPrToCommande);
  document.getElementById('ttype').innerHTML = transporteur.type;
  document.getElementById('tville').innerHTML = transporteur.ville;
  document.getElementById('ccharge').innerHTML = transporteur.charge;
}


// fonction pour supprimer un utilisateur au niveau de admin
function deleteObject(pos, key) {
  var objects = JSON.parse(localStorage.getItem(key) || '[]');
  objects.splice(pos, 1);
  localStorage.setItem(key, JSON.stringify(objects));
  location.reload();

}

function searchById(key, id) {

  var objects = getObjetsFromLocalStorage(key, id);
  var findedObject;
  for (var i = 0; i < objects.length; i++) {
    if (objects[i].id == id) {
      findedObject = objects[i];
    }
  }
  return (findedObject);

}
// fonction de recherche de transporteur
function rechercheTransporteurParAttribut() {
  var transporteurs = JSON.parse(localStorage.getItem('transporteurs') || '[]');
  var ttype = document.getElementById('type').value;
  var vville = document.getElementById('ville').value;
  var transporteurTable = ``;
  for (var i = 0; i < transporteurs.length; i++) {
    if (transporteurs[i].type == ttype || transporteurs[i].ville == vville) {

      transporteurTable = transporteurTable + `
      <div class="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
        <div class="featured__item">
          <div class="featured__item__pic set-bg" data-setbg="img/featured/feature-5.jpg">
          </div>
          <div class="featured__item__text">
                  <h6>${transporteurs[i].type}</h6>
                  <h5>${transporteurs[i].ville}</h5>
                  <button type='submit'  class="site-btn" onclick="commandeVehicule(${transporteurs[i].id})"></button> 
              </div>
          </div>
      </div>`
    }
  } document.getElementById('attributResultat').innerHTML = transporteurTable;

}

// fonction pour afficher les informations de du transporteurs
function affichageProfil() {
  var transporteurConnect = localStorage.getItem('transporteurConnect');
  var transporteur = searchById('transporteurs', transporteurConnect);
  document.getElementById('numeroImmatriculation').innerHTML = transporteur.numeroImmatriculation;
  document.getElementById('marque').innerHTML = transporteur.marque;
  document.getElementById('type').innerHTML = transporteur.type;
  document.getElementById('largeur').innerHTML = transporteur.largeur;
  document.getElementById('longueur').innerHTML = transporteur.longueur;
  document.getElementById('hauteur').innerHTML = transporteur.hauteur;
  document.getElementById('charge').innerHTML = transporteur.charge;
  document.getElementById('ville').innerHTML = transporteur.ville;

}

// fonction pour la partie validation
function validateEdit(id) {
  var newPrice = document.getElementById('newPrice').value;
  var newStock = document.getElementById('newStock').value;
  products = getObjetsFromLocalStorage('products');
  for (let i = 0; i < products.length; i++) {

    if (products[i].id == id) {
      products[i].price = newPrice;
      products[i].stock = newStock;
    }
  }
  localStorage.setItem('products', JSON.stringify(products))
  location.reload();

}


// fonction au niveau de la partie entete
function setHeader() {
  var connectUtilisateur = localStorage.getItem('connectUtilisateur');
  var header = ``;

  if (connectUtilisateur) {
    var utilisateur = searchById('utilisateurs', connectUtilisateur);
    if (utilisateur.role == 'admin') {
      header = `<nav class="header__menu">
      <ul>
        <li><a href="./profil1.html">${utilisateur.nom} ${utilisateur.prenom}</a></li>
        <li><a href="./administration.html">administration</a></li>
        <li><a href="./chercher.html">chercher</a></li>
        <li><a href="./create_admin.html">Créer un admin</a></li>
        <li><a href="./inscription_client.html">inscrire client</a></li>
        <li><a href="./inscription_transporteur.html">inscrire transporteur</a></li>
        <li><a onclick="logOut()" href="#">logout</a></li>
       
      </ul>
    </nav>`;
    } if (utilisateur.role == 'utilisateur') {
      header = `<nav class="header__menu">
        <ul>
         <li><a href="./client.html">Espace client</a></li>
         <li><a href="./cherche.html">Recherche</a></li>
         <li><a href="./listeTransporteur.html">liste Transporteur</a></li>
         <li><a href="#" onclick="logOut()">logOut</a></li>
         <li><a href="./profil1.html">${utilisateur.nom} ${utilisateur.prenom}</a></li>
        </ul>
      </nav>`;
    }
  } else {
    header = `<nav class="header__menu">
   <ul>
     <li><a href="./transporteur.html">Espace transporteur</a></li>
     <li><a href="./index.html">Accueil</a></li>
     <li><a href="./client.html">Espace client</a></li>
   </ul>
 </nav>`;
  }
  document.getElementById('header').innerHTML = header;
}


// fonction profil pour les utilisateurs tel que admin et client
function profil1() {
  var connectUtilisateur = localStorage.getItem('connectUtilisateur');
  var utilisateur = searchById('utilisateur', connectUtilisateur);
  document.getElementById('nom').innerHTML = utilisateur.nom;
  document.getElementById('prenom').innerHTML = utilisateur.prenom;
  document.getElementById('email').innerHTML = utilisateur.email;
  document.getElementById('password').innerHTML = utilisateur.password;
  document.getElementById('telephone').innerHTML = utilisateur.telephone;
  document.getElementById('adresse').innerHTML = utilisateur.adresse;

}

// fonction pour modifier l'utilisateur admin et client
function modifier1() {
  var telephone = document.getElementById('nouveauTelephone').value;
  var password = document.getElementById('nouveauPassword').value;
  var connectUtilisateur = localStorage.getItem('connectUtilisateur');
  var utilisateurs = getObjetsFromLocalStorage('utilisateurs');
  for (let i = 0; i < utilisateurs.length; i++) {
    if (utilisateurs[i].id = connectUtilisateur) {
      utilisateurs[i].password = password;
      utilisateurs[i].telephone = telephone;
    }
  }
  localStorage.setItem('utilisateur', JSON.stringify(utilisateurs));
  location.reload();
}

// fonction pour modifier les informations d'un transporteurs
function modifier() {
  var numeroImmatriculation = document.getElementById('nouveauNumeroImmatriculation').value;
  var type = document.getElementById('nouveauType').value;
  var ville = document.getElementById('nouveauVille').value;
  var transporteurConnect = localStorage.getItem('transporteurConnect');
  var transporteurs = getObjetsFromLocalStorage('transporteurs');
  for (let i = 0; i < transporteurs.length; i++) {
    if (Number(transporteurs[i].id) == Number(transporteurConnect)) {
      transporteurs[i].numeroImmatriculation = numeroImmatriculation;
      transporteurs[i].type = type;
      transporteurs[i].ville = ville;
    }
  }
  localStorage.setItem('transporteurs', JSON.stringify(transporteurs));
  location.reload();
}

// founction pour se deconnecter de l'utilisateur
function logOut() {
  localStorage.removeItem('connectUtilisateur');
  location.reload();
}

function reservation() {
  var produit = document.getElementById('produit').value;
  var verifProduit = produit.length < 2;
  affichageErreur(verifProduit, "produitErreur", "produit doit avoir au moins 2 caractères");

  var lieu = document.getElementById('lieu').value;
  var verifLieu = lieu.length < 2;
  affichageErreur(verifLieu, "lieuErreur", "lieu doit avoir au moins 2 caractères");

  var depot = document.getElementById('depot').value;
  var verifDepot = depot.length < 2;
  affichageErreur(verifDepot, "depotErreur", "depot doit avoir au moins 2 caractères");

  var telephone = document.getElementById('telephone').value;
  var verifTelephone = validateNumber(telephone);
  affichageErreur(!verifTelephone, 'telephoneErreur', "Le telehone  doit avoir 8 chiffres ");

  if (!verifProduit && !verifLieu && !verifDepot && verifTelephone) {
    var reservationId = JSON.parse(localStorage.getItem("reservationId") || "1");
    var reserve = {
      id: Number(reservationId),
      produit: produit,
      lieu: lieu,
      depot: depot,
      telephone: telephone,
      partage: false
    };
    var T = JSON.parse(localStorage.getItem('reserves') || '[]');
    T.push(reserve);
    localStorage.setItem('reserves', JSON.stringify(T));
    localStorage.setItem("reservationId", Number(reservationId) + 1);
  }
}

function affichageReservation() {
  var reserves = JSON.parse(localStorage.getItem('reserves') || '[]');
  var reserveTable = `
  <table class="table">
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Produit</th>
    <th scope="col">lieu</th>
    <th scope="col">depot</th>
    <th scope="col">telephone</th>
    <th scope="col">Action</th>
  </tr>
</thead>
<tbody>`;
  for (let i = 0; i < reserves.length; i++) {
    if (reserves[i].partage==false) {
      reserveTable = reserveTable + `
      <tr>
        <th scope="row">${reserves[i].id}</th>
        <td>${reserves[i].produit}</td>
        <td>${reserves[i].lieu}</td>
        <td>${reserves[i].depot}</td>
        <td>${reserves[i].telephone}</td>
        <td><button type="button" onclick=" contact('idTopartage', ${reserves[i].id})" class="btn btn-primary" data-bs-toggle="modal"
                                      data-bs-target="#exampleModal">partage</button>
                    <div class="modal fade" id="exampleModal" tabindex="-1"
                                      aria-labelledby="exampleModalLabel" aria-hidden="true">
                                      <div class="modal-dialog modal-dialog-scrollable">
                                          <div class="modal-content">
                                              <div class="modal-header">
                                                  
                                                  <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                      aria-label="Close">X</button>
                                              </div>
                                              <div class="modal-body">
                                                  <div class="container-fluid">
                                                      <h5>tu veux vraiment partager</h5>
                                                      <h5 id='ok'></h5>
                                              </div>
                                              <div class="modal-footer">
                                                  <button type="button" class="btn btn-secondary"
                                                      data-bs-dismiss="modal">Close</button>
                                                  <button type="button" onclick="partage()" class="btn btn-primary">partage</button>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
        </td>
    
      </tr>`
    }
  
  }
  reserveTable = reserveTable +
    `</tbody>
</table>`;

  document.getElementById('reserves').innerHTML = reserveTable;

}

function contact(key, id) {
  localStorage.setItem(key, id);
}
function partage() {
  var partage = getObjetsFromLocalStorage('idTopartage');
  // var reserve = searchById('reserves',partage)
  var reserve = getObjetsFromLocalStorage('reserves');
  for (let i = 0; i < reserve.length; i++) {
    if (reserve[i].id == Number(partage)) {
      reserve[i].partage = true;

    }

  }
  localStorage.setItem('reserves', JSON.stringify(reserve));
  document.getElementById('ok').innerText = 'votre commande est partager';
  document.getElementById('ok').style.color = 'green';



}


// fonction pour affichage
function affichageReservationTransporteur() {
  var reserves = JSON.parse(localStorage.getItem('reserves') || '[]');
  var reserveTable = `
  <table class="table">
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Produit</th>
    <th scope="col">lieu</th>
    <th scope="col">depot</th>
    <th scope="col">telephone</th>
    <th scope="col">Action</th>
  </tr>
</thead>
<tbody>`;
  for (let i = 0; i < reserves.length; i++) {
    if (reserves[i].partage == true) {
      reserveTable = reserveTable + `
      <tr>
        <th scope="row">${reserves[i].id}</th>
        <td>${reserves[i].produit}</td>
        <td>${reserves[i].lieu}</td>
        <td>${reserves[i].depot}</td>
        <td>${reserves[i].telephone}</td>
        <td><button type="submit"  onclick ="deleteObject(${i}, 'reserves')" class="btn btn-danger">Supprimer</button></td>
        
       
      </tr>`
    }

  }
  reserveTable = reserveTable +
    `</tbody>
</table>`;

  document.getElementById('reservesTransporteur').innerHTML = reserveTable;

}


