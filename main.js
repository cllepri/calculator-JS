var calculadora= document.getElementById("calculadora")
var visor = document.querySelector("#visor")
const teclas = [...document.querySelectorAll(".n")]
const operador = [...document.querySelectorAll(".operadores")]
var res = document.getElementById("igual")
const ce= document.getElementById("ce")
const mem= document.getElementById("mem")
const virg= document.getElementById("tseparador")
const aba = document.getElementById("aba")
let oper=false


operador.forEach((el) => {el.addEventListener("click",(evt) =>{
    if (!oper) {
    oper = true
    visor.innerHTML += evt.target.innerHTML  
    
    }}) })

teclas.forEach((el) => {el.addEventListener("click",(evt) =>{    
    if (visor.innerHTML == res) {visor.innerHTML = " "}
    if (visor.innerHTML == 0) { visor.innerHTML = " "}
    visor.innerHTML += evt.target.innerHTML
    if (evt.target == ce) {visor.innerHTML = "0"; decim=false}
    oper=false
})} )

res.addEventListener("click",()=>{
    res = eval(visor.innerHTML)
    visor.innerHTML = res
    oper=false
})

 aba.addEventListener("click",()=>{
    calculadora.classList.toggle("none")
 })

 