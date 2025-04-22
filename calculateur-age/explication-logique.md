# EXPLICATION LOGIQUE 
## exemple 

**26 mai 1996** => année naissance \
**22 avril 2025** => jour actuel 

1. Calculer la **différence en année** 
- annee actuel : **2025**
- annee de naissance : **1996**
- Différence : **2025 -1996 = 29**

1.1 Anniversaire pas encore passer
- mois de naissance = **mai**
- mois actuel = **avril**
- comme l'anniversaire n'est pas passer **29-1 = 28**

2. Calculer le **nb de mois** par rapport **dernier anniversaire  (26 mai 2024)**
- juin, juillet, aout, septembre, octobre, novembre, decembre (**7 mois 2024**)
- janvier, fevrier, mars , avril (**4 mois 2025 mais avril n'est pas complet**)

- **mois complet** = **7 + 3** = **10**

3. Nombre de **jours ecouler** dans le mois actuel 
- dernier anniversaire  => **26 mai 2024**
- jours actuel => **22 avril**
- calculer le **nb de jours entre 26 mars et 22 avril**
- jours **restant mars** => **31 - 26 = 5**
- jours **ecouler avril** => **22**
- **total de jours** => **5 + 22 = 27**

## RESULTAT

- 28 ans 
- 10 mois 
- 27 jours 

# LOGIQUE 
- recupere les information saisie 
- récupère la date actuel 
- compare les année et verifie si l'anniversaire a eu lieu par rapport au mois 
 

- SI le moisAniv est apres leMoisActuel l'anniversaire n'a pas eu lieu 
    - nbAnnée - 1 
    - calculer le nb de mois complet par rapport au dernier anniversaire et au mois actuel . Si le mois n'est pas fini on le calcule pas dans le mois complet 
    - nbJoursMoisEcouler - JoursAnniv dernierMoisEcouler = nbJoursMoisDernier
    - nbJoursEcouler par rapport au mois actuel ex: 22 avril = 22
    -  total des jours  => nbJoursMoisDernier + joursEcouler 
- SINON (a eu lieu) : 
    - SI le moisAniv == MoisACTUEL && dateAniv et superieur a dateActuel alors l'anniversaire n'a pas eu lieu : 
        - nbAnnée - 1 
         - calculer le nb de mois complet par rapport au dernier anniversaire et au mois actuel . Si le mois n'est pas fini on le calcule pas dans le mois complet 
        - nbJoursMoisEcouler - JoursAnniv dernierMoisEcouler = nbJoursMoisDernier
        - nbJoursEcouler par rapport au mois actuel ex: 22 avril = 22
        -  total des jours  => nbJoursMoisDernier + joursEcouler 

        

    - si le moisAnniv est avant MoisActuel l'anniversaire a eu lieu 
        - 
        - calculer le nb de mois complet par rapport au dernier anniversaire et au mois actuel . Si le mois n'est pas fini on le calcule pas dans le mois complet 
        - nbJoursMoisEcouler - JoursAnniv dernierMoisEcouler = nbJoursMoisDernier
        - nbJoursEcouler par rapport au mois actuel ex: 22 avril = 22
        -  total des jours  => nbJoursMoisDernier + joursEcouler 

        - EXEMPLE : 15 mars 2000 22 avril 2025
            - 2025 -2000 = 25
            - mars < avril donc l'anniversaire a eu lieu 
            - dernier Anniversaire : 15 mars 2025 dateActuel : 22 avril 2025
            - du 15 mars au 22 avril => plus de 1 mois 
            - joursRestantMars = 31 - 15 = 16
            - joursEcoulerAvril = 22
            - Total = 16 + 22 = 38
            - DONC 1 mois et 7 jours
            - RESULTAT : 25 ans 1 mois et 7 jours  




