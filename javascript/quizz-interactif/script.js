let compteur = 0; // ça risque d'être utile
let score = 0;
let monParagraphe = document.querySelector("#question"); 
let buttonA =  "" // à compléter
let buttonB = "" // à compléter
let buttonC =  "" // à compléter
let buttonD = "" // à compléter
let spanScore = "" // à compléter
let scoreMax = "" // à compléter

const questions = [
  {
    question: "Quel est le prénom de mon formateur ?",
    reponses: ["Anthony", "Mathieu", "Sophiane", "Christophe"],
    bonneReponse: "Anthony"
  },  
  {
    question: "Quel est le prénom de mon autre formateur ?",
    reponses: ["Fahami", "Johan", "Thomas", "Medhi"],
    bonneReponse: "Thomas"
  }
];

function initQuizz(i){
    monParagraphe.innerText = questions[i].question; // Je met ma première question dans ma balise p avec l'id #question
    // à compléter
}

// La fonction verifReponse est appelée depuis le html avec l'attribut onclick, allez voir.
function verifReponse(arg){
    console.log(arg); // ouvre ta console
    // à compléter  
}

initQuizz(0); // pourquoi ne pas utiliser notre variable compteur comme argument ? :)


