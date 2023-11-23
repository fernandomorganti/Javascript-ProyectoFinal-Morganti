
const listaJuegos = [ // arreglo con el nombre de listaJuegos que contiene objetos y sus propiedades.
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
  //Esta función se utiliza para eliminar todos los filtros que se encuentren en el sitio, podría usarse cuando un usuario hace clic en el botón "Restablecer filtros".
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
    //funcion que selecciona aleatoriamente un videojuego de la lista y lo muestra en la página.
    const clickBuscarJuego = () => {
        
        EliminarFiltros();
        
        const videoJuegoRandom = listaJuegos[Math.floor(Math.random()*listaJuegos.length)]
        const filtrado = document.getElementById("filtrado")
            filtrado.innerHTML += `<div class="videoJuego1"><img src=${videoJuegoRandom.imagen} alt="juego1" class="img1">
            <b><h3 class="h3">${videoJuegoRandom.nombre}</h3></b>
            <p>${videoJuegoRandom.descripcion}</p>
            <div class="plataformas">
            <img src="${videoJuegoRandom.imagenPlataforma}" width="100"/>
            <input type="button" value="Click aquí para Descargar" id="${videoJuegoRandom.id}" class="id">
            </div>`
            simularDescarga()
    }
    //función para llamar cada vez que el usuario haga clic en el elemento buscarJuego.
    //Este código sirve para seleccionar y mostrar aleatoriamente un videojuego en la página cada vez que el usuario hace clic en el botón.
    const buscarJuego = document.getElementById("buscarJuego").addEventListener("click", () => {
        clickBuscarJuego()
})
 // Esta función itera sobre la lista de Juegos donde están todos los videojuegos que deben cargarse.
 // Para cada juego cargado va a mostrar la imagen del juego, el nombre, la calificación, la imagen de la plataforma y un botón de "Descargar".
    const cargarJuegos= () => {
        const contenedorJuegos = document.getElementById("listaJuegos")
        
        for (const videoJuego of listaJuegos) {
                contenedorJuegos.innerHTML +=
                
                `<div class="videoJuego1"><img src="${videoJuego.imagen}" alt="juego1" class="img1">
                <b><h3 class="h3">${videoJuego.nombre}</h3></b>
                <p>${videoJuego.descripcion}</p>
                <div class="plataformas">
                <img src="${videoJuego.imagenPlataforma}" width="100"/>
                <input type="button" value="Click aquí para Descargar" id="${videoJuego.id}" class="id">
                </div>`
                }
                simularDescarga()
        } 
        // Cuando el usuario hace clic, se ejevuta esta función que permite almacenar el nombre del juego en el almacenamiento local (localStorage).
        // Luego, el código verifica la plataforma del juego y redirige al usuario al sitio web correspondiente.
        const simularDescarga = () => {
            listaJuegos.forEach((videoJuego) => {
                document.getElementById(videoJuego.id).addEventListener("click", () => {
                    localStorage.setItem(" ",JSON.stringify(videoJuego.nombre))
                    Swal.fire({
                        title: "Seguro que quiere descargar?",
                        showDenyButton: true,
                        showCancelButton: true,
                        confirmButtonText: "guardar en disco",
                        denyButtonText: `No guardar`
                      }).then((result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {
                          Swal.fire("Descargado", "", "success");
                        } else if (result.isDenied) {
                          Swal.fire("Cancelado", "", "info");
                        }
                      });
                })
            })
        }
//función para eliminar todos los filtros de la página.
//Luego, utiliza método fetch para llamar a otra lista de juegos desde el archivo local JSON.
const cargarProximoJuego = () => {
    EliminarFiltros();
            
        fetch ("../juegos.json")
        .then ( (res) => res.json()) 

        .then ((juegos) => {//Esta función se ejecuta si la promesa es resuelta.
                
        juegos.forEach((videoJuego) =>{
            const contenedorJuegos = document.getElementById("proximosJuegos")
            contenedorJuegos.innerHTML +=
                        
                `<div class="videoJuego1"><img src="${videoJuego.imagen}" alt="juego1" class="img1">
                <b><h3 class="h3">${videoJuego.nombre}</h3></b>
                <p>${videoJuego.descripcion}</p>
                <div class="plataformas">
                <img src="${videoJuego.imagenPlataforma}" width="100"/>
                <input type="button" value="Click para ver trailer" id="${videoJuego.id}" class="id"></div>`
                })
            })
        }

// Esta función filtra los juegos de la lista según la categoría seleccionada.
// primero borra los elementos de la lista, Luego agrega los juegos que coinciden con la categoría seleccionada y lo muestra en la página.
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
// esta funcion muestra el juego guardado en el localStorage y permite redireccionar al sitio de donde fue descargado, aclaro que el juego descargado es una simulacion
const ultimoJuegoJugado = () => {
    
    const juegosJugados= document.getElementById("ultimoJuego")
            juegosJugados.innerHTML= `<div id="ultimoJuego"><h2>¿Que te parecio el último Juego Descargado?</h2>
            <h2>${JSON.stringify(localStorage)}</h2><a href="https://store.steampowered.com/" target="_blank"><b><h2>OPINAR AQUI</h2></b></div>`
    }
    
// acá cargo mediante uso de Eventos los juegos que estan filtrados por plataforma.
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
// esta funcion filtra los juegos según la plataforma seleccionada, primero borra los elementos filtrados y
// luego itera sobre la lista de juegos y agrega los juegos que coinciden con la plataforma seleccionada
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
            <input type="button" value="Click aquí para Descargar" id="${videoJuego.id}" class="id">
            </div>`
            }
            simularDescarga()
    } 
// lo mismo que la funcion anterior de arriba pero en este caso filtra por categoria.
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
        <input type="button" value="Click aquí para Descargar" id="${videoJuego.id}" class="id">
        </div>`
        }
        simularDescarga()
} 
// aca se muestran los avances o novedades que aun no he podido realizarlo, pero será terminado para la entrega final.
const novedadJuego = document.getElementById("proxJuegos").addEventListener("click", () => {
    cargarProximoJuego()
})
// acá llamo a todas las funciones a ejecutar.
cargarEventosFiltros()
cargarEventosPlataformas()
ultimoJuegoJugado()
cargarJuegos()

// if (videoJuego.plataforma === "PC") {
//     location.href = "https://store.steampowered.com/"
//   }
//   if (videoJuego.plataforma === "Nintendo") {
//       location.href = "https://www.nintendo.com/"
//   }
//   if (videoJuego.plataforma === "PlayStation") {
//       location.href = "https://store.sony.com.ar/playstation/"
//   }
//   if (videoJuego.plataforma === "Xbox") {
//       location.href = "https://www.xbox.com/"
//   }