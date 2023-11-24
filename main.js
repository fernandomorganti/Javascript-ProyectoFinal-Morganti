
const listaJuegos = [
    {
      nombre: "The Secret of Monkey Island",
      categoria: "Aventura",
      plataforma: "PC",
      imagenPlataforma: "./img/PC_Gamer.png",
      descripcion: "El personaje principal Guybrush Threepwood -un aprendiz de bucanero con un enorme deseo de convertirse en un pirata- se sumergirá en las aguas del Caribe y terminará llegando a la Isla Melee. Allí, luego de vivir divertidas desventuras encontrará todo tipo de personajes, desde amistosos piratas pasando por una bella gobernadora hasta al temido LeChuck",
      imagen: "./img/juegos/monkey.jpg",
      id: 1,
    },
    {
      nombre: "Doom Eternal",
      categoria: "Primera Persona",
      plataforma: "PC",
      imagenPlataforma: "./img/PC_Gamer.png",
      descripcion: "Los jugadores toman el papel de un marine espacial sin nombre mientras lucha contra las fuerzas demoníacas del infierno que han sido desatadas por la Unión Aerospace Corporation en un planeta colonizado en el futuro " ,
      imagen: "./img/juegos/doom.jpg",
      id: 2,
    },
    {
      nombre: "Grand Theft Auto V",
      categoria: "Accion",
      plataforma: "Xbox",
      imagenPlataforma: "./img/xbox.png",
      descripcion: "GTA se trata de una serie de videojuegos de mundo abierto en el que los jugadores pueden controlar a un personaje en un ambiente urbano y realizar diversas actividades, como conducir vehículos, robar, luchar y realizar misiones. " ,
      imagen: "./img/juegos/gta-v.jpg",
      id: 3,
    },
    {
      nombre: "God of War",
      categoria: "Accion",
      plataforma: "Xbox",
      imagenPlataforma: "./img/xbox.png",
      descripcion: "Tras cobrarse venganza de los dioses del Olimpo, Kratos ahora vive en el reino de las deidades y los monstruos nórdicos. En este mundo hostil y despiadado, debe luchar por sobrevivir y enseñarle a su hijo a hacer lo mismo… pero sin repetir los errores que mancharon de sangre las manos del Fantasma de Esparta." ,
      imagen: "./img/juegos/god-of-war.jpg",
      id: 4,
    },
    {
      nombre: "The Witcher 3",
      categoria: "Aventura",
      plataforma: "PlayStation",
      imagenPlataforma: "./img/Playstation.png",
      descripcion: "Geralt de Rivia está siendo perseguido por un enemigo que no conoce la piedad: la Cacería salvaje, una mítica cuadrilla de jinetes espectrales, portadores de la destrucción y la muerte, capaz de destruir ciudades enteras de la noche a la mañana. " ,
      imagen: "./img/juegos/the-witcher-3.jpg",
      id: 5,
    },
    {
      nombre: "Diablo 3",
      categoria: "RPG",
      plataforma: "PlayStation",
      imagenPlataforma: "./img/Playstation.png",
      descripcion: "Los demonios de los Infiernos Abrasadores han deseado invadir el reino de los hombres desde siempre. Para llevar a cabo tal plan maligno, un poderoso grupo de señores demoníacos conocidos como los Males Menores exiliaron de los Infiernos a sus hermanos, los Males Supremos, y los enviaron al mundo de Santuario. Tu deber será acabar con ellos" ,
      imagen: "./img/juegos/diablo.jpg",
      id: 6,
    },
    {
        nombre: "Tomb Raider",
        categoria: "Aventura",
        plataforma: "Nintendo",
        imagenPlataforma: "./img/nintendo.png",
        descripcion: "el jugador controla a la arqueóloga Lara Croft en su búsqueda por el mundo de los tres misteriosos artefactos de Scion. El juego se presenta en perspectiva de tercera persona. Lara siempre está visible y la cámara sigue su acción desde atrás. " ,
        imagen: "./img/juegos/tomb-raider.jpg",
        id: 7,
    },
    {
        nombre: "BioShock Collection",
        categoria: "Primera Persona",
        plataforma: "Nintendo",
        imagenPlataforma: "./img/nintendo.png",
        descripcion: "BioShock está ambientado durante una ucronía del año 1960, en Rapture, una ciudad distópica ficticia bajo el agua. El jugador se entera de la historia de Rapture a través de grabaciones de audio mientras explora la ciudad. " ,
        imagen: "./img/juegos/BioShock.jpg",
        id: 8,
    },
];

    const EliminarFiltros = () =>{
        const eliminarFiltrado = document.getElementById("filtrado")
        const eliminarJuegos = document.getElementById("listaJuegos")
        const eliminarUlti = document.getElementById("ultimoJuego")
        const contenedorJuegos = document.getElementById("proximosJuegos")
            eliminarFiltrado.innerHTML= " "
            eliminarJuegos.innerHTML= " "
            eliminarUlti.innerHTML = " "
            contenedorJuegos.innerHTML = " "
    }
  
    const clickBuscarJuego = () => {
        
        EliminarFiltros();
        
        const videoJuegoRandom = listaJuegos[Math.floor(Math.random()*listaJuegos.length)]
        const filtrado = document.getElementById("filtrado")
            filtrado.innerHTML += `<div class="videoJuego1"><img src=${videoJuegoRandom.imagen} alt="juego1" class="img1">
            <b><h3 class="h3">${videoJuegoRandom.nombre}</h3></b>
            <p>${videoJuegoRandom.descripcion}</p>
            <div class="plataformas">
            <img src="${videoJuegoRandom.imagenPlataforma}" width="100"/>
            <input type="button" value="Descargar Juego" id="${videoJuegoRandom.id}" class="id">
            </div>`
            simularDescarga()
    }
   
    const buscarJuego = document.getElementById("buscarJuego").addEventListener("click", () => {
        clickBuscarJuego()
})

    const cargarJuegos= () => {
        const contenedorJuegos = document.getElementById("listaJuegos")
        
        for (const videoJuego of listaJuegos) {
                contenedorJuegos.innerHTML +=
                
                `<div class="videoJuego1"><img src="${videoJuego.imagen}" alt="juego1" class="img1">
                <b><h3 class="h3">${videoJuego.nombre}</h3></b>
                <p>${videoJuego.descripcion}</p>
                <div class="plataformas">
                <img src="${videoJuego.imagenPlataforma}" width="100"/>
                <input type="button" value="Descargar Juego" id="${videoJuego.id}" class="id">
                </div>`
                }
                simularDescarga()
        } 
 
    const simularDescarga = () => {
            listaJuegos.forEach((videoJuego) => {
                document.getElementById(videoJuego.id).addEventListener("click", () => {
                    localStorage.setItem(" ",JSON.stringify(videoJuego.nombre))
                    Swal.fire({
                        title: "¿Seguro que quiere descargar?",
                        showDenyButton: true,
                        showCancelButton: true,
                        confirmButtonText: "Guardar en disco",
                        denyButtonText: "No guardar"
                      }).then((result) => {
                        if (result.isConfirmed) {
                          Swal.fire("Descargado", "", "success");
                        } else if (result.isDenied) {
                          Swal.fire("Cancelado", "", "info");
                        }
                      })
                })
            })
        }

const cargarProximoJuego = () => {
    EliminarFiltros();
            
        fetch ("../juegos.json")
        .then ( (res) => res.json()) 

        .then ((juegos) => {
                
        juegos.forEach((videoJuego) =>{
            const contenedorJuegos = document.getElementById("proximosJuegos")
            contenedorJuegos.innerHTML +=
                        
                `<div class="videoJuego1"><img src="${videoJuego.imagen}" alt="juego1" class="img1">
                <b><h3 class="h3">${videoJuego.nombre}</h3></b>
                <p>${videoJuego.descripcion}</p>
                <div class="plataformas">
                <img src="${videoJuego.imagenPlataforma}" width="100"/>
                <input type="button" value="Ver Trailer Juego" id="${videoJuego.id}" class="id"></div>`
                })
            })
        }

const cargarEventosFiltros = () => {
    EliminarFiltros();
    const inputsDeFiltros = document.getElementsByClassName("filtrarPorCategoria")
    
    if (inputsDeFiltros.length > 0) {
        [...inputsDeFiltros].forEach((input) => {
            input.addEventListener("click", () => {
                filtrarPorCategoria(input.value)
                const eliminarJuegos = document.getElementById("listaJuegos")
                eliminarJuegos.innerHTML= " "
                const eliminarUltimoJuego = document.getElementById("ultimoJuego")
                eliminarUltimoJuego.innerHTML = " "
                const eliminarLanzamientos = document.getElementById("proximosJuegos")
                eliminarLanzamientos.innerHTML = " "
            })
        })
    }
}

const ultimoJuegoJugado = () => {
    
    const juegosJugados= document.getElementById("ultimoJuego")
            juegosJugados.innerHTML= `<div id="ultimoJuego"><h2>¿Que te parecio el último Juego Descargado?</h2>
            <h2>${JSON.stringify(localStorage)}</h2><a href="https://store.steampowered.com/" target="_blank"><b><h2>OPINAR AQUI</h2></b></div>`
    }
    

 const cargarEventosPlataformas = () => {
    EliminarFiltros();
       const inputsDePlataforma = document.getElementsByClassName("filtrarPorPlataforma")
       if (inputsDePlataforma.length > 0) {
            [...inputsDePlataforma].forEach((input) => {
                input.addEventListener("click", () => {
                    filtrarPorPlataforma(input.value)
                    const eliminarJuegos = document.getElementById("listaJuegos")
                    eliminarJuegos.innerHTML= " "
                    const eliminarUltimoJuego = document.getElementById("ultimoJuego")
                    eliminarUltimoJuego.innerHTML = " "
                    const eliminarLanzamientos = document.getElementById("proximosJuegos")
                    eliminarLanzamientos.innerHTML = " "
                })
            })
        }
    }

const filtrarPorPlataforma = (plataforma) => {
    EliminarFiltros();
    const filtrado = document.getElementById("filtrado")

    filtrado.innerHTML = ''
    
    const JuegosFiltrados = listaJuegos.filter((videoJuego) => videoJuego.plataforma === plataforma)
    
        for (const videoJuego of JuegosFiltrados) {
            
            filtrado.innerHTML += `<div class="videoJuego1"><img src="${videoJuego.imagen}" alt="juego1" class="img1">
            <b><h3 class="h3">${videoJuego.nombre}</h3></b>
            <p>${videoJuego.descripcion}</p>
            <div class="plataformas">
            <img src="${videoJuego.imagenPlataforma}" width="100"/>
            <input type="button" value="Descargar juego" id="${videoJuego.id}" class="id">
            </div>`
            }
            simularDescarga()
    } 

const filtrarPorCategoria= (categoria) => {
    EliminarFiltros();
    const filtrado = document.getElementById("filtrado")
    filtrado.innerHTML = ''
    
    const JuegosFiltrados = listaJuegos.filter((videoJuego) => videoJuego.categoria.toLowerCase() === categoria.toLowerCase())

    for (const videoJuego of JuegosFiltrados) {
            
        filtrado.innerHTML += `<div class="videoJuego1"><img src="${videoJuego.imagen}" alt="juego1" class="img1">
        <b><h3 class="h3">${videoJuego.nombre}</h3></b>
        <p>${videoJuego.descripcion}</p>
        <div class="plataformas">
        <img src="${videoJuego.imagenPlataforma}" width="100"/>
        <input type="button" value="Descargar Juego" id="${videoJuego.id}" class="id">
        </div>`
        }
        simularDescarga()
} 

const novedadJuego = document.getElementById("proxJuegos").addEventListener("click", () => {
    cargarProximoJuego()
})

cargarEventosFiltros()
cargarEventosPlataformas()
ultimoJuegoJugado()
cargarJuegos()
