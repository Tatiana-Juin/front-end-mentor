// RECUPERER LES ELEMENT DU DOM 
let erreur = document.querySelector(".erreur");
let jourInput = document.querySelector(".jour");
let moisInput = document.querySelector(".mois");
let anneeInput = document.querySelector(".annee");
let btn = document.querySelector(".btn");

// FONCTION POUR LES ERREUR 
function funcErreur(jour,mois,annee,anneeActuelle){

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


        }
    }
}

// FONCTION SI L'ANIV A EU LIEU 

//  FONCTION SI L'ANIV A EU LIEU 

btn.addEventListener("click", (e) =>{
    e.preventDefault();

    let jour = jourInput.value;
    let mois = moisInput.value;
    let annee = anneeInput.value;µ

    // INITIALISATION DE LA DATE 
    let dateActuelle = new Date(); 
  
    // recupere index du mois 
    let moisIndex= dateActuelle.getMonth() ;
    let nomDesMois = ['janvier','fevrier','mars','avril','mai','juin','juillet','aout','septembre','octobre','novembre','decembre'];
    // Pour afficher en lettre de  nom du mois actuelle 
    let nomDuMoisActuelle = nomDesMois[moisIndex];
    
    // POUR RECUPERER L'ANNEE ACTUELLE 
    let anneeActuelle = dateActuelle.getFullYear();

    console.log(moisIndex + 1);
    console.log(anneeActuelle);

    funcErreur(jour,mois,annee,anneeActuelle);
    
   

})

