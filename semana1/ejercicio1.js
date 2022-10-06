/*const num1=6,num2=10;
let suma=num1+num2
//funcion sumar
console.log(`la suma entre ${num1} y ${num2} es ${suma}`);*/
const sumar=(num1,num2)=>{
    let suma=num1+num2
    console.log(`la suma entre ${num1} y ${num2} es ${suma}`);

}
//funcion restar
function restar(num1,num2){
    let resta=num1-num2
    console.log(`la resta entre ${num1} y ${num2} es ${resta}`)
    
}
//funcion multiplicar
function multiplicar(num1,num2){
    let multi=num1*num2
    console.log(`la multiplicacion entre ${num1} y ${num2} es ${multi}`)
}
//funcion dividir 
function dividir(num1,num2){
    let divi=num1/num2
    console.log(`la divicion entre ${num1} y ${num2} es ${divi}`)
}
//funcion potencia
function potencia(num1,num2){
    let pot=Math.pow(num1,num2)
    console.log(`la potencia entre ${num1} y ${num2} es ${pot}`)
}
//funcion radicacion
function radicacion(num1,num2){
    let rad=Math.sqrt(num1,num2)
    console.log(`la radicacion entre ${num1} y ${num2} es ${rad}`)
}
//exports.suma=sumar
//exports.resta=restar
//exports.multi=multiplicar
//exports.divi=dividir
//exports.potenciar=potencia
//exports.radicar=radicacion

const operaciones={}
operaciones.suma=sumar;
operaciones.resta=restar;
operaciones.multi=multiplicar;
operaciones.divi=dividir;
operaciones.multi=multiplicar;
operaciones.potenciar=potencia;
operaciones.radicar=radicacion;
module.exports=operaciones;
