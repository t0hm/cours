:grand_cercle_vert: - Intitulé de l'exercice: Gestion d'un carnet d'adresses
Dans cet exercice, vous allez créer et manipuler un objet en JavaScript représentant un carnet d'adresses.
L'objectif est de se familiariser avec la création, la modification et l'accès aux propriétés d'un objet.

:large_green_circle: - Énoncé de l'exercice:
Créez un objet vide appelé carnetAdresses.
Ajoutez trois contacts à carnetAdresses en utilisant la syntaxe appropriée. Chaque contact doit être un objet avec les propriétés nom, prenom, telephone et email. Utilisez des données fictives pour remplir ces informations.

```
Exemple de structure d'un contact :
{ 
    nom: "Dupont", 
    prenom: "Jean", 
    telephone: "01 23 45 67 89",
    email: "jean.dupont@email.com" 
} 
```

Écrivez une fonction ajouterContact qui prend en paramètre un objet contact et l'ajoute au carnet d'adresses. Le nom du contact doit être utilisé comme clé dans l'objet carnetAdresses. Testez cette fonction en ajoutant un nouveau contact.
Écrivez une fonction trouverContact qui prend en paramètre un nom de contact et retourne les informations de contact correspondantes sous forme d'un objet, ou null si le contact n'est pas trouvé. Testez cette fonction en recherchant un contact existant et un contact inexistant.
Écrivez une fonction supprimerContact qui prend en paramètre un nom de contact et supprime le contact correspondant du carnet d'adresses. Testez cette fonction en supprimant un contact existant.
Écrivez une fonction afficherContacts qui affiche tous les contacts du carnet d'adresses, avec leurs informations de contact, dans la console. Vous pouvez utiliser une boucle for...in pour parcourir les contacts.

:large_green_circle: - Conseils :
N'hésitez pas à consulter la documentation ou les exemples fournis précédemment pour comprendre comment manipuler les objets en JavaScript.
Pensez à tester chaque fonction après l'avoir écrite pour vous assurer qu'elle fonctionne correctement.

:large_green_circle: - Pseudo-code :
```
// 1. Créez un objet vide appelé carnetAdresses

// 2. Ajoutez trois contacts à carnetAdresses
// Chaque contact doit être un objet avec les propriétés nom, prenom, telephone et email

// 3. Écrivez une fonction ajouterContact qui prend en paramètre un objet contact
// et l'ajoute au carnet d'adresses
// Le nom du contact doit être utilisé comme clé dans l'objet carnetAdresses

// 4. Écrivez une fonction trouverContact qui prend en paramètre un nom de contact
// et retourne les informations de contact correspondantes sous forme d'un objet
// ou null si le contact n'est pas trouvé

// 5. Écrivez une fonction supprimerContact qui prend en paramètre un nom de contact
// et supprime le contact correspondant du carnet d'adresses (cherchez dans la doc)

// 6. Écrivez une fonction afficherContacts qui affiche tous les contacts du carnet d'adresses
// avec leurs informations de contact, dans la console
```