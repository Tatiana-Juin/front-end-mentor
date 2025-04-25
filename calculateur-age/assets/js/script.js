// RECUPERER LES ELEMENT DU DOM 
let erreur = document.querySelector(".erreur");
let jourInput = document.querySelector(".jour");
let moisInput = document.querySelector(".mois");
let anneeInput = document.querySelector(".annee");
let btn = document.querySelector(".btn");

// FONCTION POUR LES ERREUR 
function funcErreur(jour,mois,annee,anneeActuelle){

    // lA DATE DE L'ANNIVERSAIRE DOIT ETRE superieur a 2 ans 
    let nouvelleAnnee = anneeActuelle -1;
    // console.log(nouvelleAnnee);
 

    // TOUS LES CHAMPS NE SONT PAS REMPLI 
    if(jour.trim() ==="" || mois.trim()==="" || annee.trim() ===""){
       return erreur.innerHTML="Il faut remplir tous les champs";
        
        
    }
    else{
        // SI LE NB DE JOURS EST UNE ERREUR 
        if(jour < 1 || jour > 31  ){
            // erreur.innerHTML="";
          return  erreur.innerHTML="Le nombre du jours doit etre compris entre 1 et 31";

        }else{

            // NB DE MOIS EST UNE ERREUR 
            if(mois< 1 || mois > 12){
              return  erreur.innerHTML="Le nombre du mois doit etre compris entre 1 et 12"; 
            }
            else{
                // SI L'ANNEE COMPORTE UNE ERREUR 
                if(annee < 1915 || annee > nouvelleAnnee){
                    return  erreur.innerHTML="l'année est incorrecte "; 
                }else{
                    // SI TOUTES LES VERIFICATION SONT BONNE CELA ENLEVE LE TEXTE D'ERREUUR 
                    return  erreur.innerHTML=" "; 
                }
            }


        }
    }
}

// FONCTION SI L'ANIV A EU LIEU 

//  FONCTION SI L'ANIV A EU LIEU 

btn.addEventListener("click", (e) =>{
    e.preventDefault();

    // RECUPERE LES INFORMATION SAISIE 
    let jour = jourInput.value;
    let mois = moisInput.value;
    let annee = anneeInput.value;

    // INITIALISATION DE LA DATE 
    let dateActuelle = new Date(); 

    // RECUPERE LE JOUR ACTUELLE 
    let jourActuelle = dateActuelle.getDate();
   
    
    // recupere index du mois 
    let moisIndex= dateActuelle.getMonth() +1;
    let nomDesMois = ['janvier','fevrier','mars','avril','mai','juin','juillet','aout','septembre','octobre','novembre','decembre'];
    // Pour afficher en lettre de  nom du mois actuelle 
    let nomDuMoisActuelle = nomDesMois[moisIndex];

    // POUR RECUPERER L'ANNEE ACTUELLE 
    let anneeActuelle = dateActuelle.getFullYear();

    // console.log(` Le jour saisie est : ${jour} ${mois} ${annee} `);
    // console.log(` Date actuelle : ${jourActuelle} ${moisIndex} ${anneeActuelle} `);

    funcErreur(jour,mois,annee,anneeActuelle);

    if(mois > moisIndex){
        // console.log("Annive na pas eu lieu");
        let nbAnnee = anneeActuelle - annee - 1;
        // console.log(nbAnnee);
        // Pour recuperer la date entiere en chaine de caractere
        let dateEntiereActuel = jourActuelle +""+ moisIndex +""+ anneeActuelle;
        
        // console.log(typeof dateEntiereActuel);
        // EN CAS OU ON DOIT LA CONVERTIR EN NB 
        // let nbDateEntierActuel = Number(dateEntiereActuel);
        // console.log(nbDateEntierActuel);

        // RECUPERER LE DERNIER ANNVIERSAIRE 
        let dernierAniv = jour + ""+ mois + "" + anneeActuelle -1;
        console.log(dernierAniv);
        let nbMois = 1 ;
     

        // if(jourActuelle != 1){
            
        //     while(mois != moisActuelle -1 ){
        //         nbMois = nbMois + 1;
        //     }
        // }
        let moisDebut = parseInt(mois);
        for(let m = moisDebut; m< moisIndex; m++ ){
            console.log("m au début de l'itération :", m);
            nbMois ++;
            console.log("NbMois a la fin de l'itération :", nbMois);
        }
        nbMois = nbMois + (nbAnnee * 12);
        console.log(nbMois);


    
    }


    


})

