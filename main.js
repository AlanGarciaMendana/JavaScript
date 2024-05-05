 const MAP = [
    {id:1,
    texto: "LLegas al poblado de Caidagua siguiendo el sendero del arroyo. Decides ir a la posada donde tomas una Cerveza.\nHablando con los lugareños te comentan de una Catacumba cercana llena de tesoros, por lo que decis ir a investigar.\nAl llegar al lugar, ves una entrada de una cueva... Tomas coraje y continuas el paso a lo desconocido"
    },{id:2,
   texto:"Avanzas cautelosamente por la cueva, aunque la oscuridad prevalese, logras ver una silueta mas adelante",
    },{id:3,
    texto:"Te topaste con un Hombre Rata! Preparate para luchar!",
    },{id:4,
    texto:"Aunque te hirio saliste victorioso! continuas con tu excursion,sigues avanzando hacia lo desconocido",
    },{id:5,
    texto:"Al avanzar encuentras un cadaver ya por los huesos,parece que tiene una espada clavada entre sus costillas,\nLLena de telaraña decides quitarsela, es una Espada Larga",
    },{id:6,
        texto:"Sigue avanzando, no hay nada nuevo aqui, solo un monton de rocas",
    },{id:7,
        texto:"Decides acampar aqui, tomas una pocion de salud y te vendas tus heridas, recuperaste todos los puntos de Vida",
    },{id:8,
        texto:"Te topaste con una division del camino, debes decidir, Derecha o Izquierda",
    },{id:9,
        texto:"Al continuar, ves un tumulto de tierra,\n Algo brilla en su interior.\n¡Has encontrado una armadura de placas!",
    },{id:10,
        texto:"Sigue avanzando, no hay nada nuevo aqui, solo un monton de rocas",
    },{id:11,
        texto:"Sigue avanzando, no hay nada nuevo aqui, solo un monton de rocas",
    },{id:12,
        texto:"Sigue avanzando, no hay nada nuevo aqui, solo un monton de rocas",
    },{id:13,
        texto:"Sigue avanzando, no hay nada nuevo aqui, solo un monton de rocas",
    },{id:14,
        texto:"Sigue avanzando, no hay nada nuevo aqui, solo un monton de rocas",
    },{id:15,
        texto:"Sigue avanzando, no hay nada nuevo aqui, solo un monton de rocas",
    },{id:16,
        texto:"Sigues Caminando,Que es eso!\nDesde debajo de un crater aparece un cienpies gigante",
    },{id:17,
        texto:"Sigue avanzando, no hay nada nuevo aqui, solo un monton de rocas",
    },{id:18,
    texto:"Decides acampar aqui, tomas una pocion de salud y te vendas tus heridas, recuperaste todos los puntos de Vida",
    },{id:19,
    texto:"Estas viendo el final, hay una puerta del otro lado...\n Espera, que es esa sombra!",
    },{id:20,
    texto:"Una Arana Gigante se interpone entre la salida y tu!",
},
] 
let Bienvenida =alert("Bienvenido a LoreTerra, Un juego tipo Dungeon & Dragons\nEn este juego deberas aventurarte en una mision, recolectar Items y enfrentarte a enemigos")
let ReglasDeJuego =alert("Las reglas son faciles, eres un Guerrero, segun tu nivel de arma y armadura tiraras los dados para atacar y defenderte, el numero de dados sera el daño que realices en el caso de los ataques\nEn el caso de la defensa, si tiras un dado y sale mayor a 7 esquivaras el ataque. Los dados tienen 12 caras.\n Avanzas de a un casillero, no puedes volver atras, tu unica salida es hacia adelante.")
let Defensa = false
let AtaqueTotal 
let Esquivaste
let HeridoTexto
let ResultadoDefensaNpc
let Evento
let EquiparArmaduraTexto
let EquiparArmaTexto
let HeristeTexto
let PerdisteBatalla
let GanasteTexto 
let GanasteBossfinal 
const DADO=[1,2,3,4,5,6,7,8,9,10,11,12]

const TirarDado = () =>{
const Tirada = Math.floor(Math.random() * DADO.length);
return Tirada
    }

const Heroe={
    vida:50,
    armadura:1,
    arma:2,
}
const HombreRata={
    id:1,
    vida:30,
    arma:1,
    armadura:0,
}

const CienPiesGigante ={
    id:2,
    vida:50,
    arma: 2,
    armadura:1,
}
const AranaGigante= {
    id:3,
    vida: 65,
    arma: 3,
    armadura: 2,
}

const DefensaHeroe = () => {
Defensa= false
for (let i = 0; i < Heroe.armadura; i++){
    const TiradaDefensaHeroe = TirarDado();
    let DefensaHeroeResultado = alert ("Sacaste " +TiradaDefensaHeroe)
    console.log(TiradaDefensaHeroe);
if  (TiradaDefensaHeroe > 7 ) {
Defensa = true
}

}console.log(Defensa)
}
const AtaqueHeroe = () => {
     AtaqueTotal = 0
    for (let i = 0; i < Heroe.arma; i++){
        const TiradaAtaqueHeroe = TirarDado();
AtaqueTotal+= TiradaAtaqueHeroe
       
    } alert("Balanceas tu espada y das un golpe... Tiras los dados. Sacaste "+ AtaqueTotal+ ", El enemigo prepara su defensa" )
    return AtaqueTotal}


const AtaqueNpcs = (NPC) => {
    AtaqueTotal = 0
    for (let i = 0; i < NPC.arma; i++){
        const TiradaAtaqueNpc = TirarDado();
        console.log(TiradaAtaqueNpc)
AtaqueTotal+= TiradaAtaqueNpc
 
    } 
     let Resultado= alert("Saco "+AtaqueTotal + ", te preparas para defenderte")
     return {AtaqueTotal}
     
   
}

const DefensaNpcs = (NPC) => {
    Defensa= false
for (let i = 0; i < NPC.armadura; i++){
    const TiradaDefensaNpcs = TirarDado();
    ResultadoDefensaNpc = alert("Saco "+ TiradaDefensaNpcs);
if  (TiradaDefensaNpcs > 7 ) {
    Defensa = true
}
}
}

const EquiparArmadura = () =>{
    Heroe.armadura = 3
}
const EquiparArma =()=>{
    Heroe.arma = 3
}

const RestaurarVida = () => {
    Heroe.vida = 50
}

const DecidirCamino = () =>{

const Derecha = confirm ("¿Deseas ir a la derecha?")
console.log(Derecha)
if (Derecha === true) {
    MAP.splice(13,2)
}
else{
    MAP.splice(7,8)
}
return MAP

}
let TextoTurno 


const PeleaNpc =(NPC) =>{
    while(Heroe.vida > 0 && NPC.vida >0){
        if(Heroe.vida > 0){
    TextoTurno = alert("Tu turno de atacar")
    AtaqueHeroe()
    DefensaNpcs(NPC) 

     if (Defensa === false)

    {
    let RestanteVidaNPC =NPC.vida -= AtaqueTotal
    if(NPC.vida <= 0){MuertoNPC =alert("la criatura ha muerto")}else{
    HeristeTexto =alert("Heriste con exito al enemigo Le quedan " + RestanteVidaNPC + " puntos de Vida.")}
    } else{
        Esquivaste = alert("la criatura esquivo el golpe")
    }
    }
    if(NPC.vida > 0){
    alert("Turno del enemigo")
    AtaqueNpcs(NPC)
    DefensaHeroe()
    if (Defensa === true){
    Esquivaste =  alert("esquivaste el golpe")
    } else {
      const RestanteVidaHeroe =  Heroe.vida -= AtaqueTotal
      if(Heroe.vida <= 0){
        Muerto = alert("has muerto")
      }else{
     HeridoTexto = alert("Te hirio con exito, te quedan "+RestanteVidaHeroe+ " puntos de vida")}}
    }}

}

while(Heroe.vida > 0) {MAP.forEach((element) => {
 Evento= alert(element.texto)

    if (element.id === 3){
        while((Heroe.vida > 0 && HombreRata.vida > 0) ){
        PeleaNpc(HombreRata)
        if (Heroe.vida <= 0) {
        PerdisteBatalla= alert("¡Has perdido la batalla! Vuelve a comenzar")
            break
              }}}
else if(element.id === 5){
        EquiparArma()
         EquiparArmaTexto = alert("¡Ahora tiraras 3 dados en tus ataques!")
    }
else if (element.id === 7){
    RestaurarVida()
}
else if(element.id ===  8){
    DecidirCamino()
}
else if (element.id === 9){
    EquiparArmadura()
     EquiparArmaduraTexto = alert("¡Ahora Tiraras 3 dados en tu defensa!")
}
else if(element.id === 16){
    while((Heroe.vida > 0 && CienPiesGigante.vida > 0) ){
    PeleaNpc(CienPiesGigante)
    if (Heroe.vida <= 0) {
        PerdisteBatalla= alert("¡Has perdido la batalla! Vuelve a comenzar")
           break}
        else if(CienPiesGigante.vida <=0){
            GanasteTexto =alert("¡mataste con exito a la criatura! Sigues tu camino")
        }}}
else if(element.id === 18){
    RestaurarVida()
}
else if(element.id === 20){
    while((Heroe.vida > 0 && AranaGigante.vida > 0) ){
    PeleaNpc(AranaGigante)
    if (Heroe.vida <= 0) {
         PerdisteBatalla= alert("¡Has perdido la batalla! Vuelve a comenzar")
           break}else if(AranaGigante.vida <= 0){GanasteBossfinal= alert("Saliste victorioso, logras irte de las catacumbas con tu Tesoro!")}
}}})}
