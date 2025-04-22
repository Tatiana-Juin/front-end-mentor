// RECUPERER LES ELEMENT DU DOM 
let erreur = document.querySelector(".erreur");
let jourInput = document.querySelector(".jour");
let moisInput = document.querySelector(".mois");
let anneeInput = document.querySelector(".annee");
let btn = document.querySelector(".btn");

// FONCTION SI L'ANIV A EU LIEU 

//  FONCTION SI L'ANIV A EU LIEU 

btn.addEventListener("click", (e) =>{
    e.preventDefault();

    let jour = jourInput.value;
    let mois = moisInput.value;
    let annee = anneeInput.value;
    
    if(jour.trim() ==="" || mois.trim()==="" || annee.trim() ===""){
        erreur.innerHTML="Il faut remplir tous les champs";
    }

    // console.log(` jour : ${jour} mois: ${mois} annee: ${annee}`);
    


})