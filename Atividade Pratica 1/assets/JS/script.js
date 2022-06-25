var primeiroNumero = prompt("Insira o primeiro número:");
var segundoNumero = prompt("Insira o segundo número:");
var soma = parseFloat(primeiroNumero) + parseFloat(segundoNumero);

if (!primeiroNumero || !segundoNumero){
    console.log("Insira dois números válidos!")} 
    
    else{
    
        parseFloat(primeiroNumero) + parseFloat(segundoNumero) > 10 ? maiorDez = true : maiorDez = false;
    parseFloat(primeiroNumero) + parseFloat(segundoNumero) > 20 ? maiorVinte = true : maiorVinte= false;
    
    maiorDez == true ? fraseUm = "que é maior que 10" : fraseUm = "que é menor que 10";
    maiorVinte == true ? fraseDois = "e maior que 20." : fraseDois = "e menor que 20.";
    
    primeiroNumero == segundoNumero ? console.log("Os números SÃO iguais. Sua soma é", soma , fraseUm, fraseDois) : console.log("Os números NÃO são iguais. Sua soma é:", soma, fraseUm, fraseDois);
}
