const contenedor = document.getElementById("adivinanza")
const botonRes = document.getElementById("boton")
const resultadoAdivinanza = document.getElementById("resultado")

resultadoAdivinanza.style.background = '#333'
resultadoAdivinanza.style.color = '#fff'
resultadoAdivinanza.style.padding = '30px'

const preguntas = [
    {
        pregunta : "1. Cómo se llaman los NAP aprobados en septiembre de 2018?",
        respuestas : {
            a: "Ciencias informáticas",
            b: "Inglés",
            c: "Educación digital, programación y robótica",
            d: "Matemática"
        },
        respuestaCorrecta: "c"
    },
    {
        pregunta : "2. Cómo son las competencias que nos obligan a adquirir estos NAP?",
        respuestas : {
            a: "Digitales",
            b: "Linguisticas", 
            c: "Actitudinales",
            d: "Conceptuales"
        },
        respuestaCorrecta: "a"
    },
    {
        pregunta : "3. Cómo se llama el carro de carga y de guarda con netbooks que entregó el gobierno nacional a las escuelas primarias?",
        respuestas : {
            a: "A. C. M.",
            b: "A. D. M.",
            c: "A. T. R.",
            d: "A. B. P."
        },
        respuestaCorrecta: "b"
    },
    {
        pregunta : "4. Qué componentes necesitamos para poner en funcionamiento la pizarra digital?",
        respuestas : {
            a: "Netbook + pizarra digital (emisor, receptor, lápiz óptico)",
            b: "Proyector + pizarra digital (emisor, receptor, lápiz óptico)",
            c: "Netbook + proyector",
            d: "Netbook + proyector + pizarra digital (emisor, receptor, lápiz óptico)"
        },
        respuestaCorrecta: "d"
    }
]

function mostrarAdivinanza() {
    const preguntasYrespuestas = []
    
    preguntas.forEach((preguntaActual, numeroDePregunta)=> {
        const respuestas = []
        for(letraRespuesta in preguntaActual.respuestas){
            respuestas.push(
               `<label>
                   <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}">
                   ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}    
               </label>`)
        }
        preguntasYrespuestas.push(`<div class="custion"> ${preguntaActual.pregunta}</div>
                                   <div class="respuestas"> ${respuestas.join('')}</div>`)
    })
    contenedor.innerHTML = preguntasYrespuestas.join('')
}
mostrarAdivinanza()
 
function mostrarResultado(){
    const respuestas = contenedor.querySelectorAll(".respuestas")
    let respuestasCorrectas = 0
    
    preguntas.forEach((preguntaActual, numeroDePregunta) => {
        const todasLasRespuestas = respuestas[numeroDePregunta]
        const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`
        const respuestaElegida = (todasLasRespuestas.querySelector(checkboxRespuestas) || {}).value
        
        if(respuestaElegida === preguntaActual.respuestaCorrecta) {
            respuestasCorrectas++
            
            respuestas[numeroDePregunta].style.color = 'green'
        }   
        else {
            respuestas[numeroDePregunta].style.color = 'red'
            alert('LAS DE COLOR ROJO NO SON CORRECTAS, INTENTA DE NUEVO!')
        }
    })
    resultadoAdivinanza.innerHTML = 'Acertaste: ' + respuestasCorrectas + ' preguntas de un total de ' + preguntas.length
}

botonRes.addEventListener('click', mostrarResultado)