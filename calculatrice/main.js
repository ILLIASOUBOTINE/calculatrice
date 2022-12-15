
// function plus(a,b) {
//     return a + b;
// }

// function minus(a,b) {
//     return a - b;
// }

// function del(a,b) {
//     return a / b;
// }

// function mult(a,b) {
//     return a * b;
// }




// function foo(a, b, operator) {
//     let result;
//     if (operator === "+") {
//         result = (plus(a,b));
//     }else if (operator === "-"){
//         result = (minus(a,b))  
//     }else if (operator === "/"){
//         result =  (del(a,b)) 
//     }else if (operator === "*"){
//         result = (mult(a,b))  
//     }else {
//         result =  alert("operator incorect  " + operator)
//     }
//     return result;
// }

    


// (function fFirst() {
//     let a = Number(prompt("entree A"));
//     let operator = prompt("entree +, -, * , /" );
//     let b = Number(prompt("entree B"));

//     if (confirm("Confirm!") == true) {
//         alert(foo(a,b,operator));
//     } else {
//         fFirst();
//     }

// })();

////////////////////////////////////////////////////////////
// `a[href$="zip"]`
const afficher = document.querySelector(`input[type$="text"]`);
console.log(afficher);
// let arrTd = document.querySelectorAll(`input[type$="button"]`);


function ajouter(str) {
    afficher.value += str;
}

//fonction de resultat
function resultat(){
    try {
        afficher.value = eval(afficher.value);
    } catch (error) {
        console.log("operation incorrect");
    }
    
}
//fonction operation 
function operation(signe){
    try {
        afficher.value = eval(afficher.value);
        afficher.value += signe;
    } catch (error) {
        console.log("operation incorrect");
    }
    
        
   

}
//fonctions effectuant des operations speciales (via des methodes intégrées à javascript)
function fonctionSpeciale(opespeciale){
switch(opespeciale){
case "sqrt":
document.Calculette.affiche.value =Math.sqrt(eval(document.Calculette.affiche.value));
break;
case "log":
document.Calculette.affiche.value =Math.log(eval(document.Calculette.affiche.value));
break;
case "pow":
document.Calculette.affiche.value =Math.pow(eval(document.Calculette.affiche.value),2);
break;
}}