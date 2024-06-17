
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    title: "Bienvenido a LoreTerra",
    text: "Un juego tipo Dungeon & Dragons En este juego deberas aventurarte en una mision, recolectar Items y enfrentarte a enemigos \nDeseas jugar?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Si",
    cancelButtonText: "No",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
        Swal.fire({
            title: "Reglas",
            text: "Las reglas son faciles, eres un Guerrero, segun tu nivel de arma y armadura tiraras los dados para atacar y defenderte, el numero de dados sera el daño que realices en el caso de los ataques\nEn el caso de la defensa, si tiras un dado y sale mayor a 7 esquivaras el ataque. Los dados tienen 12 caras.\n Avanzas de a un casillero, no puedes volver atras, tu unica salida es hacia adelante.",
            confirmButtonText: "Entendido",
          }).then((result)=>{if(result.isConfirmed){
            Swal.fire({
                title: "Como Jugar",
                text: "Para comenzar una Pelea debes clickear en los dados y para avanzar en el mapa debes clickear el boton Avanzar.",
          })}});
    } else if (

      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire({
        title: "Cancelado",
        text: "Esperemos que quieras jugarlo pronto!",
        icon: "error"
      });
    }
  });



const StatsHeroe = document.getElementById("heroe")
const mapa = document.getElementById("mapa")
const dados = document.getElementById("dados")
const tirada = document.getElementById("tirada")
const evento = document.getElementById("evento")
const eventotirada = document.getElementById("event-tirada")
const NombredelHeroe = document.getElementById("NombreHeroe")

const DADO=[1,2,3,4,5,6,7,8,9,10,11,12]


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
let HabiitarDados = true
let Tirada



const TirarDado = () =>{
    const Tirada = Math.floor(Math.random() * DADO.length + 1);
    tirada.innerText = Tirada;
    return Tirada; }

const Heroe={
    vida:50,
    armadura:1,
    arma:2,
}
const Atributos= () =>{ StatsHeroe.innerText = `ATRIBUTOS\n\n\nVIDA:${Heroe.vida}\nDEF: ${Heroe.armadura}\nARMA: ${Heroe.arma}`}
Atributos()

    let HombreRata
    let AranaGigante
    let CienPiesGigante

 const traerCriaturas= async ()=>{
        try{
           const res = await fetch("./criaturas.json")
           const data = await res.json()
            HombreRata = data.HombreRata
            AranaGigante= data.AranaGigante
            CienPiesGigante = data.CienPiesGigante
        }
        catch (error){
           console.log(error)
        }
       }  

    traerCriaturas()

const MAP = [
    {id:1,
    texto: "LLegas al poblado de Caidagua siguiendo el sendero del arroyo. Decides ir a la posada donde tomas una Cerveza.\nHablando con los lugareños te comentan de una Catacumba cercana llena de tesoros, por lo que decis ir a investigar.\nAl llegar al lugar, ves una entrada de una cueva... Tomas coraje y continuas el paso a lo desconocido"
    ,imagen:"./images/poblado.png"
},{id:2,
   texto:"Avanzas cautelosamente por la cueva, aunque la oscuridad prevalese, logras ver una silueta mas adelante",
   imagen:"./images/cueva.jpg"
    },{id:3,
    texto:"Te topaste con un Hombre Rata! Preparate para luchar!",
    imagen:"./images/cueva.jpg"
    },{id:4,
    texto:"Aunque te hirio saliste victorioso! continuas con tu excursion,sigues avanzando hacia lo desconocido",
    imagen:"./images/cueva.jpg"
    },{id:5,
    texto:"Al avanzar encuentras un cadaver ya por los huesos,parece que tiene una espada clavada entre sus costillas,\nLLena de telaraña decides quitarsela, es una Espada Larga",
    imagen:"./images/cueva.jpg"
    },{id:6,
        texto:"Sigue avanzando, no hay nada nuevo aqui, solo un monton de rocas",
        imagen:"./images/cueva.jpg"
    },{id:7,
        texto:"Decides acampar aqui, tomas una pocion de salud y te vendas tus heridas, recuperaste todos los puntos de Vida",
        imagen:"./images/cueva.jpg"
    },{id:8,
        texto:"Te topaste con una division del camino, debes decidir, Derecha o Izquierda",
        imagen:"./images/cueva.jpg"
    },{id:9,
        texto:"Al continuar, ves un tumulto de tierra,\n Algo brilla en su interior.\n¡Has encontrado una armadura de placas!",
        imagen:"./images/cueva.jpg"
    },{id:10,
        texto:"Sigue avanzando, no hay nada nuevo aqui, solo un monton de rocas",
        imagen:"./images/cueva.jpg"
    },{id:11,
        texto:"Sigue avanzando, no hay nada nuevo aqui, solo un monton de rocas",
        imagen:"./images/cueva.jpg"
    },{id:12,
        texto:"Sigue avanzando, no hay nada nuevo aqui, solo un monton de rocas",
        imagen:"./images/cueva.jpg"
    },{id:13,
        texto:"Sigue avanzando, no hay nada nuevo aqui, solo un monton de rocas",
        imagen:"./images/cueva.jpg"
    },{id:14,
        texto:"Sigue avanzando, no hay nada nuevo aqui, solo un monton de rocas",
        imagen:"./images/cueva.jpg"
    },{id:15,
        texto:"Sigue avanzando, no hay nada nuevo aqui, solo un monton de rocas",
        imagen:"./images/cueva.jpg"
    },{id:16,
        texto:"Sigues Caminando,Que es eso!\nDesde debajo de un crater aparece un cienpies gigante",
        imagen:"./images/cueva.jpg"
    },{id:17,
        texto:"Sigue avanzando, no hay nada nuevo aqui, solo un monton de rocas",
        imagen:"./images/cueva.jpg"
    },{id:18,
    texto:"Decides acampar aqui, tomas una pocion de salud y te vendas tus heridas, recuperaste todos los puntos de Vida",
    imagen:"./images/cueva.jpg"
    },{id:19,
    texto:"Estas viendo el final, hay una puerta del otro lado...\n Espera, que es esa sombra!",
    imagen:"./images/cueva.jpg"
    },{id:20,
    texto:"Una Arana Gigante se interpone entre la salida y tu!",
    imagen:"./images/cueva.jpg"
}]

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

const Derecha = Swal.fire({
    title: "Decide tu camino?",
    text: "Que camino deseas elegir",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    showCancelButton: true,
    confirmButtonText: "Derecha",
    cancelButtonText:"Izquierda",
})

if (Derecha === true) {
    MAP.splice(13,2)
}
else{
    MAP.splice(7,8)
}
return MAP

}


const DefensaHeroe = () => {
Defensa= false
for (let i = 0; i < Heroe.armadura; i++){
    const TiradaDefensaHeroe = TirarDado();
    eventotirada.innerText =`Sacaste  ${TiradaDefensaHeroe}`
    
if  (TiradaDefensaHeroe > 7 ) {
Defensa = true
}

}
}
const AtaqueHeroe = () => {
     AtaqueTotal = 0
    for (let i = 0; i < Heroe.arma; i++){
        const TiradaAtaqueHeroe = TirarDado();
AtaqueTotal+= TiradaAtaqueHeroe
eventotirada.innerText =`Balanceas tu espada y das un golpe... Tiras los dados. Sacaste  ${AtaqueTotal}, El enemigo prepara su defensa`
    } 
    console.log(AtaqueTotal)
    return AtaqueTotal}


const AtaqueNpcs = (NPC) => {
    AtaqueTotal = 0
    for (let i = 0; i < NPC.arma; i++){
        const TiradaAtaqueNpc = TirarDado();

AtaqueTotal+= TiradaAtaqueNpc
 
    } 
    eventotirada.innerText =`"Saco ${AtaqueTotal}, te preparas para defenderte`
     return {AtaqueTotal}
     
   
}

const DefensaNpcs = (NPC) => {
    Defensa= false
for (let i = 0; i < NPC.armadura; i++){
    const TiradaDefensaNpcs = TirarDado();
    eventotirada.innerText =`Saco ${TiradaDefensaNpcs}`;
if  (TiradaDefensaNpcs > 7 ) {
    Defensa = true
    console.log(Defensa)
}
}
}

const PeleaNpc = (NPC) => {
    eventotirada.innerText ="Empieza la pelea";
    avanzarButton.disabled = true; 

    const verificarMuerte = () => {
        if (Heroe.vida <= 0) {
            eventotirada.innerText = "¡Has muerto!";
            return true;
        } else if (NPC.vida <= 0) {
            eventotirada.innerText = "¡Has derrotado al enemigo!";
            return true;
        }
        return false;
    };

    const intervalID = setInterval(() => {
        if (verificarMuerte()) {
            clearInterval(intervalID);
            eventotirada.innerText = "Terminó la pelea";
            if (Heroe.vida <= 0) {
                avanzarButton.disabled = true; 
            } else {
                avanzarButton.disabled = false; 
            }
            return;
        }

        eventotirada.innerText = "Tu turno de atacar";
        AtaqueHeroe(); 

        setTimeout(() => {
            DefensaNpcs(NPC);
            if (Defensa === false) {
                let RestanteVidaNPC = NPC.vida -= AtaqueTotal;
                if (NPC.vida <= 0) {
                    eventotirada.innerText = "La criatura ha muerto";
                    avanzarButton.disabled = false; 
                } else {
                    eventotirada.innerText = `Heriste con éxito al enemigo. Le quedan ${RestanteVidaNPC} puntos de Vida.`;
                }
            } else {
                eventotirada.innerText = "La criatura esquivó el golpe";
            }
        }, 500);

        if (verificarMuerte()) {
            avanzarButton.disabled = false; 
            return;
        }

        setTimeout(() => {
            eventotirada.innerText = "Turno del enemigo";
            AtaqueNpcs(NPC);
            setTimeout(() => {
                DefensaHeroe();
                if (Defensa === true) {
                    eventotirada.innerText = "¡Esquivaste el golpe!";
                } else {
                    const RestanteVidaHeroe = Heroe.vida -= AtaqueTotal;
                    Atributos();
                    if (Heroe.vida <= 0) {
                        eventotirada.innerText = "¡Has muerto!";
                        clearInterval(intervalID);
                        avanzarButton.disabled = false; 
                    } else {
                        eventotirada.innerText = `Te hirió con éxito. Te quedan ${RestanteVidaHeroe} puntos de vida`;
                    }
                }
            }, 1000);
        }, 2000);
    }, 2500);
};
let currentIndex = 0; 
const mostrarElementoActual = () => {
  const elementoActual = MAP[currentIndex];
  evento.innerText = elementoActual.texto;
  mapa.src = elementoActual.imagen;
  if (elementoActual.id === 3) {
    avanzarButton.disabled= true
    setTimeout(() => {
    dados.addEventListener("click",()=>PeleaNpc(HombreRata))},2000)}
    else if (elementoActual.id === 5){
        setTimeout(()=>{
        EquiparArma()
    Atributos()},2000)
    }
    else if(elementoActual.id === 7){
        setTimeout(()=>{
   
        RestaurarVida()
    Atributos()},2000)
    }
    else if(elementoActual.id === 8){
        setTimeout(()=>{
 
        DecidirCamino()},500)
    }
    else if(elementoActual.id === 9){
        setTimeout(()=>{
 
        EquiparArmadura()
    Atributos()},500)
    }
    else if(elementoActual.id === 16){
        avanzarButton.disabled= true
        setTimeout(() => {
            dados.addEventListener("click",()=>PeleaNpc(CienPiesGigante))},2000)
    }
    else if(elementoActual.id === 18){
        setTimeout(()=>{
 
        RestaurarVida()
    Atributos()},500)
    }
    else if(elementoActual.id === 20){
        avanzarButton.disabled= true
        setTimeout(() => {
            dados.addEventListener("click",()=>PeleaNpc(AranaGigante))},2000)
    }
}
const avanzar = () => {
  currentIndex++; 
  if (currentIndex >= MAP.length) {
    currentIndex = 0; 
  }
  mostrarElementoActual(); 
}

const  avanzarButton = document.getElementById('avanzar')
avanzarButton.addEventListener('click', avanzar);
mostrarElementoActual();

const Nombreguardado= localStorage.getItem("nombreHeroe")
NombredelHeroe.value = Nombreguardado

NombredelHeroe.addEventListener("change", ()=> {

    const inputValue = NombredelHeroe.value;

    localStorage.setItem("nombreHeroe", inputValue);
});
