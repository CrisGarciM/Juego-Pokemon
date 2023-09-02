// variable global para algunas funciones 
const reiniciarbtn = document.getElementById('reiniciar')
const sectionSeleAtaque = document.getElementById('sesion-ataque')
//se crea una variable para llamar el id del boton de selecion de personaje
const botonPersonaje = document.getElementById('btn-personaje')
//variable para el boton de reiniciar la partida
const botonReiniciar =document.getElementById('btn-reset')
//variable de seleccion de personajes
const ocultarPersonaje = document.getElementById('sesion-personaje')
// variable para la seleccion de personaje enemigo
const spanPersonajeEnemigo = document.getElementById('player-evil')
// variable para cambiar el valor de span mediante el innerHTML
const spanPersonaje = document.getElementById('player')
// variables para las vidas de los jugadores
const spanVidaJugador = document.getElementById('vidas-jugador')
const spanVidaEnemigo = document.getElementById('vidas-enemigo')
// variables para informar los ataques de los jugadores
const atq = document.getElementById('atq')
const atqene = document.getElementById('atq-ene')
// variables para reiniciar y mostrar el resultado de la partida
const resetbtn = document.getElementById('reiniciar')
const sectionMensajes = document.getElementById('res')
// variable para enviar la informacion del metodo forEach a html y biseversa
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtq = document.getElementById('contenedorAtq')
// variable para el camvas o mapa
const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')
// variables para almacenar vidas, los ataques y almacenar los personajes en un arreglo
let mokepones = [] // este es un arreglo para almacenar alos personajes
// variable para la id del jugador
let mokeponsEnemigos = []
let jugadorId = null
let enemigoId = null
/* let ataqueJugador */
let ataqueEnemigo = []
//variables para los botones de ataque
let botonAgua 
let botonTierra 
let botonFuego 
let botonViento 
let botones = []
let ataquePersonaje = []
let ataquesMkponEnemigo
let indexAtaqueJUgador
let indexAtaqueEnemigo 
let victoriasJUgador = 0
let victoriasEnemigo = 0
let ataquesMokepon
// variable para almacenar la informacion que llevaran las tarjetas 
let opcionDeMokepones
let personajeJugador
let miPersonajeJugador
// variables para almacenar el nombre de los personajes
let inputQutsumi 
let inputTalleuis 
let inpuTagints 
let inputLevitx 
let inputPydos 
let inputChronts 
let inputMontapurts 
// mapa del juego
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackgraund = new Image()
mapaBackgraund.src = './assets/mapaJuego.PNG'
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
alturaQueBuscamos = anchoDelMapa * 600 / 800
const anchoMaximoMapa = 350

if( anchoDelMapa > anchoMaximoMapa){
    anchoDelMapa = anchoMaximoMapa - 20
}

mapa.width = alturaQueBuscamos
mapa.height = anchoDelMapa
// clase
class Mokepon {
    constructor(nombre, foto, vida, id = null) {
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []//arreglo para los ataques
        this.ancho = 50
        this.alto = 50
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = foto
        this.velocidadX = 0
        this.velocidadY = 0
    }
    pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}
// objeto de los nombres que se almacenara en el arreglo mokepones
let qutsumi = new Mokepon('Qutsumi', './assets/Dialga.PNG', 5)
let talleuis = new Mokepon('Talleuis', './assets/Rayquaza.PNG', 5)
let agints = new Mokepon('Agints', './assets/tierra.PNG', 5)
let levitx = new Mokepon('Levitx', './assets/Volcanion.PNG', 5)
let pydos = new Mokepon('Pydos', './assets/fuego.png', 5)
let chronts = new Mokepon('Chronts', './assets/pika.png', 5)
let montopurts = new Mokepon('Montopurts', './assets/Squirtle.PNG', 5)

// objeto de los ataques que se almacenaran en el arreglo ataques
const qutsumi_ataques = [
    {nombre:'🍃', id:'btn-viento'},
    {nombre:'🍃', id:'btn-viento'},
    {nombre:'🍃', id:'btn-viento'},
    {nombre:'💧', id:'btn-agua'},
    {nombre:'🔥', id:'btn-fuego'},
]
qutsumi.ataques.push(...qutsumi_ataques)

const talleuis_ataques = [
    {nombre:'☘️', id:'btn-tierra'},
    {nombre:'☘️', id:'btn-tierra'},
    {nombre:'☘️', id:'btn-tierra'},
    {nombre:'💧', id:'btn-agua'},
    {nombre:'🔥', id:'btn-fuego'},
]
talleuis.ataques.push(...talleuis_ataques)

const agints_ataques = [
    {nombre:'💧', id:'btn-agua'},
    {nombre:'💧', id:'btn-agua'},
    {nombre:'💧', id:'btn-agua'},
    {nombre:'🔥', id:'btn-fuego'},
    {nombre:'🔥', id:'btn-fuego'},
]
agints.ataques.push(...agints_ataques)

const levitx_ataques = [
    {nombre:'🍃', id:'btn-viento'},
    {nombre:'🍃', id:'btn-viento'},
    {nombre:'🍃', id:'btn-viento'},
    {nombre:'🔥', id:'btn-fuego'},
    {nombre:'🔥', id:'btn-fuego'},
]
levitx.ataques.push(...levitx_ataques)

const pydos_ataques = [
    {nombre:'🔥', id:'btn-fuego'},
    {nombre:'🔥', id:'btn-fuego'},
    {nombre:'🔥', id:'btn-fuego'},
    {nombre:'🍃', id:'btn-viento'},
    {nombre:'🍃', id:'btn-viento'},
]
pydos.ataques.push(...pydos_ataques)

const chronts_ataques = [
    {nombre:'🍃', id:'btn-viento'},
    {nombre:'🍃', id:'btn-viento'},
    {nombre:'🍃', id:'btn-viento'},
    {nombre:'💧', id:'btn-agua'},
    {nombre:'💧', id:'btn-agua'},
]
chronts.ataques.push(...chronts_ataques)

const montopurts_ataques = [
    {nombre:'☘️', id:'btn-tierra'},
    {nombre:'☘️', id:'btn-tierra'},
    {nombre:'🍃', id:'btn-viento'},
    {nombre:'🍃', id:'btn-viento'},
    {nombre:'💧', id:'btn-agua'},
]
montopurts.ataques.push(...montopurts_ataques)
//metodo push() para almacenar los personajes en un arreglo 
mokepones.push(qutsumi,talleuis,agints,levitx,pydos,chronts,montopurts)

//funcion de iniciar el juegp
function iniciarJuego(){
//variable para oculatar al inicio los ataques 
sectionSeleAtaque.style.display = 'none'
//Ocultar el voton de reiniciar para que solo aparesca al final
reiniciarbtn.style.display = 'none'
// Ocultar el mapa 
sectionVerMapa.style.display = 'none'
//metodo forEach para interactuar con el codigo html y el js sacando informacion de un arreglo
mokepones.forEach((mokepon)=>{
    opcionDeMokepones = `
    <label class="card" for=${mokepon.nombre}>
        <img src="${mokepon.foto}" alt=${mokepon.nombre}>
        <p>${mokepon.nombre}</p>
    </label>
    <input type="radio" name="personaje" id=${mokepon.nombre}>
    `
    contenedorTarjetas.innerHTML += opcionDeMokepones
// se llama alas variables para mostrar por pantalla su nombre de personaje
    inputQutsumi = document.getElementById('Qutsumi')
    inputTalleuis = document.getElementById('Talleuis')
    inpuTagints = document.getElementById('Agints')
    inputLevitx = document.getElementById('Levitx')
    inputPydos = document.getElementById('Pydos')
    inputChronts = document.getElementById('Chronts')
    inputMontapurts = document.getElementById('Montopurts')
})
//Eventos para algunos botones
botonPersonaje.addEventListener('click',seleccionarPersonaje)
//Reiniciar juego
botonReiniciar.addEventListener('click',reiniciarJuego)

unirseAlJuego()
}
// Funcion para crear id 
function unirseAlJuego(){
    fetch("http://192.168.18.8:8080/unirse")
        .then(function(res){
            if(res.ok){
                res.text()
                    .then(function (respuesta){
                        console.log(respuesta);
                        jugadorId = respuesta
               })
        }
    })
}
// selecion de Personaje
function seleccionarPersonaje(){
//se declaran variables para almacenar alos personajes     
    if(inputQutsumi.checked) {
        spanPersonaje.innerHTML =inputQutsumi.id
        personajeJugador = inputQutsumi.id
    } else if(inputTalleuis.checked) {
        spanPersonaje.innerHTML=inputTalleuis.id
        personajeJugador = inputTalleuis.id
    } else if(inpuTagints.checked) {
        spanPersonaje.innerHTML=inpuTagints.id
        personajeJugador = inpuTagints.id
    } else if(inputLevitx.checked) {
        spanPersonaje.innerHTML=inputLevitx.id
        personajeJugador = inputLevitx.id
    } else if(inputPydos.checked) {
        spanPersonaje.innerHTML=inputPydos.id
        personajeJugador = inputPydos.id
    } else if(inputChronts.checked) {
        spanPersonaje.innerHTML=inputChronts.id
        personajeJugador = inputChronts.id
    } else if(inputMontapurts.checked){
        spanPersonaje.innerHTML=inputMontapurts.id
        personajeJugador = inputMontapurts.id
    } else{
        alert('!!Selecciona a un Personaje!!')
        return
    }
    //variable para ocultar  la seleccion de personaje
    ocultarPersonaje.style.display = 'none'
    extraerAtaques(personajeJugador)
    sectionVerMapa.style.display = 'flex'
    seleccionMokepon(personajeJugador)
    iniciarMapa()
}
//funsion para enviar los personajes al servidor
function seleccionMokepon(personajeJugador){
    fetch(`http://192.168.18.8:8080/mokepon/${jugadorId}`,{
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mokepon: personajeJugador
        })
    })
}
// Funcion de numero aleatorio
function aleatorio(min,max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}
//Funcion para la eleccion de personaje enemigo
function seleccionarEnemigo(enemigo){
    // metodo para imprimir el personaje del enemigo 
    spanPersonajeEnemigo.innerHTML = enemigo.nombre
    ataquesMkponEnemigo = enemigo.ataques
    secuenciaAtaques()
}
// extares ataques personaje
function extraerAtaques(personajeJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if(personajeJugador === mokepones[i].nombre){
            ataques = mokepones[i].ataques
        }
    }
    verAtaques(ataques)
}
// funcion para ver los botones de los ataques de los personajes
function verAtaques(ataques){
    ataques.forEach((ataque)=>{
        ataquesMokepon = `
        <button id=${ataque.id} class="btn-ataq Bataque">${ataque.nombre}</button>
        `
        contenedorAtq.innerHTML += ataquesMokepon
    })
//evento  para las variables de los botones
    botonAgua = document.getElementById('btn-agua')
    botonTierra = document.getElementById('btn-tierra')
    botonFuego = document.getElementById('btn-fuego')
    botonViento = document.getElementById('btn-viento')

    botones = document.querySelectorAll('.Bataque')
}
// funcion para la secuencia de ataque del jugador
function secuenciaAtaques(){
    botones.forEach((boton)=>{
        boton.addEventListener('click', (e) => {
            if(e.target.textContent === '🔥'){
                ataquePersonaje.push('FUEGO🔥')
                boton.style.background = '#bcb8b1'
                //evento para oculatar el boton unas ves seleccionado
                boton.disabled = true
            }else if(e.target.textContent === '💧'){
                ataquePersonaje.push('AGUA💧')
                boton.style.background = '#bcb8b1'
                //evento para oculatar el boton unas ves seleccionado
                boton.disabled = true
            }else if(e.target.textContent === '☘️'){
                ataquePersonaje.push('TIERRA☘️')
                boton.style.background = '#bcb8b1'
                //evento para oculatar el boton unas ves seleccionado
                boton.disabled = true
            }else{
                ataquePersonaje.push('VIENTO🍃')
                boton.style.background = '#bcb8b1'
                //evento para oculatar el boton unas ves seleccionado
                boton.disabled = true
            }
            if(ataquePersonaje.length === 5){
                enviarAtaques()
            }
        })
    })
}
//funcion para enviar los ataques
function enviarAtaques(){
    fetch(`http://192.168.18.8:8080/mokepon/${jugadorId}/ataques`,{
        method: "post",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            ataques: ataquePersonaje
        })
    })
    intervalo = setInterval(optenerAtaques, 50)
}
//
function optenerAtaques(){
    fetch(`http://192.168.18.8:8080/mokepon/${enemigoId}/ataques`)
     .then(function(res){
        if(res.ok){
            res.json()
                .then(function({ ataques }){
                    if(ataques.length === 5){
                        ataqueEnemigo = ataques
                        combate()
                    }
                })
        }
     })
}
//Funcion para inciar el combate solo son 5 r
function iniciarPelea(){
    if(ataquePersonaje.length ===5){
        combate()
    }
}
//funcion para crear el almacenamiento del combate
function indexAmbosOponentes(jugador,enemigo){
    indexAtaqueJUgador = ataquePersonaje[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}
//Funcion para definir quien gano , perdio o empato
function combate(){
    clearInterval(intervalo)

    for (let index = 0; index < ataquePersonaje.length; index++) {
        if(ataquePersonaje[index] == ataqueEnemigo[index]){
            indexAmbosOponentes(index,index)
            crearMensaje("EMPATE🤔")
        }else if(ataquePersonaje[index]== 'VIENTO🍃' && ataqueEnemigo[index]=='TIERRA☘️'){
            indexAmbosOponentes(index,index)
            crearMensaje("EMPATE🤔")
        }else if(ataquePersonaje[index]== 'TIERRA☘️' && ataqueEnemigo[index]=='VIENTO🍃'){
            indexAmbosOponentes(index,index)
            crearMensaje("EMPATE🤔")
        }else if(ataquePersonaje[index]== 'TIERRA☘️' && ataqueEnemigo[index]=='FUEGO🔥'){
            indexAmbosOponentes(index,index)
            crearMensaje("EMPATE🤔")
        }else if(ataquePersonaje[index]== 'FUEGO🔥' && ataqueEnemigo[index]=='TIERRA☘️'){
            indexAmbosOponentes(index,index)
            crearMensaje("EMPATE🤔")
        }else if(ataquePersonaje[index]=='VIENTO🍃' && ataqueEnemigo[index]=='AGUA💧'){
            indexAmbosOponentes(index,index)
            crearMensaje("EMPATE🤔")
        }else if(ataquePersonaje[index]=='AGUA💧' && ataqueEnemigo[index]=='VIENTO🍃'){
            indexAmbosOponentes(index,index)
            crearMensaje("EMPATE🤔")
        }else if(ataquePersonaje[index]== 'AGUA💧' && ataqueEnemigo[index]=='TIERRA☘️'){
            indexAmbosOponentes(index,index)
            crearMensaje("GANASTE🏆")
            victoriasJUgador ++
            spanVidaJugador.innerHTML = victoriasJUgador
        }else if(ataquePersonaje[index]== 'AGUA💧' && ataqueEnemigo[index]=='FUEGO🔥'){
            indexAmbosOponentes(index,index)
            crearMensaje("GANASTE🏆")
            victoriasJUgador ++
            spanVidaJugador.innerHTML = victoriasJUgador
        }else if(ataquePersonaje[index]== 'VIENTO🍃' && ataqueEnemigo[index]=='FUEGO🔥'){
            indexAmbosOponentes(index,index)
            crearMensaje("GANASTE🏆")
            victoriasJUgador ++
            spanVidaJugador.innerHTML = victoriasJUgador
        }else{
            indexAmbosOponentes(index,index)
            crearMensaje("Perdiste😡")
            victoriasEnemigo ++
            spanVidaEnemigo.innerHTML = victoriasEnemigo
        }
    }
    //Revision de vidas
    revisarVidas()
}
//Funcion para mirar las vidas o validar que no sean menor a 0
function revisarVidas(){
    if(victoriasJUgador == victoriasEnemigo){
        crearMensajeFinal("EMPATE🤔")
    }else if(victoriasJUgador >  victoriasEnemigo){
        crearMensajeFinal("FELICITACIONES🏆")
    }else{
        crearMensajeFinal("PERDISTE😢")
    }
}
//Funcion para crear mensajes del avanse de la partida
function crearMensaje(resultado){
// variables para crear parafos de los ataques en partida
    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = indexAtaqueJUgador
    nuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo

    atq.appendChild(nuevoAtaqueJugador)
    atqene.appendChild(nuevoAtaqueEnemigo)
}
//Funcion para el mensaje final
function crearMensajeFinal(resultadoFinal){
    //Evento para mostra el boton de reiniciar
    resetbtn.style.display = 'block'
    sectionMensajes.innerHTML = resultadoFinal
}
//Reiniciar Juego
function reiniciarJuego(){
    location.reload()
}
//Funcion del mapa
function pintarCamvas(){
    miPersonajeJugador.x = miPersonajeJugador.x + miPersonajeJugador.velocidadX
    miPersonajeJugador.y = miPersonajeJugador.y + miPersonajeJugador.velocidadY
    lienzo.clearRect(0,0,mapa.width,mapa.height)
    lienzo.drawImage(
        mapaBackgraund,
        0,
        0,
        mapa.width,
        mapa.height
    )
    miPersonajeJugador.pintarMokepon()

    enviarPosicion(miPersonajeJugador.x, miPersonajeJugador.y)

    mokeponsEnemigos.forEach(function(mokepon){
        mokepon.pintarMokepon()
        revisarColicion(mokepon)
    })
}
//funcion para enviar la posicion  al servidor
function enviarPosicion(x, y){
    fetch(`http://192.168.18.8:8080/mokepon/${jugadorId}/posicion`,{
        method: "post",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
     .then(function (res){
        if(res.ok){
            res.json()
              .then(function ({ enemigos }){
                console.log(enemigos)
                mokeponsEnemigos = enemigos.map(function(enemigo){
                    let mokeponEnemigo = null
                    const mokeponNombre = enemigo.mokepon.nombre || ""
                    if(mokeponNombre === "Qutsumi"){
                        mokeponEnemigo = new Mokepon('Qutsumi', './assets/Dialga.PNG', 5, enemigo.id)
                    }else if(mokeponNombre === "Talleuis"){
                        mokeponEnemigo = new Mokepon('Talleuis', './assets/Rayquaza.PNG', 5, enemigo.id)
                    }else if(mokeponNombre === "Agints"){
                        mokeponEnemigo = new Mokepon('Agints', './assets/tierra.PNG', 5, enemigo.id)
                    }else if(mokeponNombre === "Levitx"){
                        mokeponEnemigo = new Mokepon('Levitx', './assets/Volcanion.PNG', 5, enemigo.id)
                    }else if(mokeponNombre === "Pydos"){
                        mokeponEnemigo = new Mokepon('Pydos', './assets/fuego.png', 5, enemigo.id)
                    }else if(mokeponNombre === "Chronts"){
                        mokeponEnemigo = new Mokepon('Chronts', './assets/pika.png', 5, enemigo.id)
                    }else{
                        mokeponEnemigo = new Mokepon('Montopurts', './assets/Squirtle.PNG', 5, enemigo.id) 
                    }
                    mokeponEnemigo.x  = enemigo.x
                    mokeponEnemigo.y = enemigo.y

                    return mokeponEnemigo
                }) 
              })
        }
     })
}
// funciones de movimiento de los personajes
function moverDerecha(){
    miPersonajeJugador.velocidadX = 5
}
function moverIzquierda(){
    miPersonajeJugador.velocidadX = -5
}
function moverAbajo(){
    miPersonajeJugador.velocidadY = 5
}
function moverArriba(){
    miPersonajeJugador.velocidadY = -5
}
function detenerMovimiento(){
    miPersonajeJugador.velocidadX = 0
    miPersonajeJugador.velocidadY = 0
}
// funcion para reconoser las teclas del teclado
function sePresionoUnaTecla(event){
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
            break
        default:
            break;
    }
}
//Funcion para inicioar el mapa
function iniciarMapa(){
    miPersonajeJugador = obtenerPersonaje(personajeJugador)
    intervalo = setInterval(pintarCamvas, 50)
    window.addEventListener('keydown', sePresionoUnaTecla)
    window.addEventListener('keyup' , detenerMovimiento)
}
//funcion para obtner los personajes y mostrarlos en el mapa
function obtenerPersonaje(){
    for (let i = 0; i < mokepones.length; i++) {
        if(personajeJugador === mokepones[i].nombre){
            return mokepones[i]
        }
    }
}
// funcion para ver si nustro personaje choco con algo
function revisarColicion(enemigo){
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x 

    const arribaJugador = miPersonajeJugador.y
    const abajoJugador = miPersonajeJugador.y + miPersonajeJugador.alto
    const derechaJugador = miPersonajeJugador.x + miPersonajeJugador.ancho
    const izquierdaJugador = miPersonajeJugador.x 
    if(
        abajoJugador < arribaEnemigo || 
        arribaJugador > abajoEnemigo ||
        derechaJugador < izquierdaEnemigo ||
        izquierdaJugador > derechaEnemigo
    ){
        return
    }
    detenerMovimiento()
    clearInterval(intervalo)
    enemigoId = enemigo.id
//variable para activar otra ves los ataques una ves selecionado el personaje
    sectionSeleAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'none'
    seleccionarEnemigo(enemigo)
}
//funcion para cargar el html primero que el js
//Evento ara que carge el html y luego el js 
window.addEventListener('load',iniciarJuego)