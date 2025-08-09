//Punto 1 Convertidor Temp
function temp(a){

    return f = a * (9/5) +32
}
console.log(temp(23))

//Punto 2 resolvedor

function resolvedor(a,b,c,signo){
    if(signo == "+"){
        x = (-b + Math.sqrt(b**2 - (4*a*c)))/(2*a)
    } else if(signo == "-") {
        x = (-b - Math.sqrt(b**2 - (4*a*c)))/(2*a)
    }
    return x
}
console.log(resolvedor(1,5,4,"+"))

//MejorParidad
function mejorParidad(a){
    return a %2 === 0
}
console.log(mejorParidad(2))

//Peor Paridad

function peorParidad(a){
    if (a === 0){
        return "Par"
    } else if (a === 1){
        return "Impar"
    } else if  (a === 2){
        return "Par"
    } else if  (a === 3){
        return "Impar"
    } else if  (a === 4){
        return "Par"
    } else if  (a === 5){
        return "Impar"
    } else if  (a === 6){
        return "Par"
    } else if  (a === 7){
        return "Impar"
    } else if  (a === 8){
        return "Par"
    } else if  (a === 9){
        return "Impar"
    } else if  (a === 10){
        return "Par"
    }
}
console.log(peorParidad(2))
