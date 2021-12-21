fetch('http://moviequiz4.alumnes.inspedralbes.cat/back/mvc/trending_peliculas.php').then(function(res) {
    return res.json();
}).then(function(data) {
    console.log(data);
    let tren = "";
    for(let i = 0;i < data.trending.length;i++) {
        tren += `<img src="${data.trending[i][0].poster}"> `;
    }
    document.getElementById("trending").innerHTML = tren;
});

fetch('http://moviequiz4.alumnes.inspedralbes.cat/back/mvc/partida.php').then(function(res) {
    return res.json();
}).then(function(data) {
    console.log(data);
});

document.getElementById("botonLogin").addEventListener('click', function(){
    let email = document.getElementById("correo").value;
    let pass = document.getElementById("contrasena").value;

    console.log(email);
    console.log(pass);

    let datosEnvio = new FormData();
    datosEnvio.append('correo',email);
    datosEnvio.append('contrasena',pass);

    document.getElementById("botonLogin").setAttribute("style","display: none;");
    document.getElementById("loading").removeAttribute("hidden");

    fetch('http://moviequiz4.alumnes.inspedralbes.cat/back/mvc/login.php',{
        method: 'POST',
        body: datosEnvio
    }).then(function(res){
        return res.json();
    }).then(function(data) {
            console.log(data);
            if (data.exito == true) {
                document.getElementById("login").classList.remove("activa");
                document.getElementById("login").classList.add("noactiva");
                document.getElementById("info-usuari").classList.add("activa");
                document.getElementById("info-usuari").classList.remove("noactiva");
                htmlstr = "";
                htmlstr += `<h5>Bienvenido de nuevo ${data.nombre} ${data.apellido}</h5>`;
                document.getElementById("inicio").innerHTML = htmlstr;
                //document.getElementById("btn-guardar").removeAttribute("disabled");
            } else {
                document.getElementById("botonLogin").removeAttribute("style", "display: none;");
                document.getElementById("loading").setAttribute("style", "display: none;");
                htmlstr = "";
                htmlstr += `<h5 style="color: red">Vuelva ha escribir otra vez</h5>`;
                document.getElementById("inicio2").innerHTML = htmlstr;
                //document.getElementById("btn-guardar").setAttribute("disabled");
            }
    }).catch(function(){
        console.log("Problema!");
    });
});

document.getElementById("peliculas").addEventListener("click", function(e) {
    console.log(e.target);
    if (e.target.classList.contains("guardar")) {
        let puntuacion = e.target.parentElement.querySelector("[name='puntuacion']:checked").value;
        let favorito = (e.target.parentElement.querySelector("[name='favorito']").checked == true) ? 1 : 0;
        let comentario = e.target.parentElement.querySelector("#comentario").value;
        console.log(favorito + " " + puntuacion);

        const npeli = e.target.getAttribute("num");
        console.log("ID peli " + npeli);
        const datosPeli = datos.Search[npeli];
        //e.target.innerHTML = "check";

        const datosEnvio = new FormData();
        datosEnvio.append('favorito', favorito);
        datosEnvio.append('comentario', comentario);
        datosEnvio.append('puntuacion', puntuacion);
        datosEnvio.append('imdbId', datosPeli.imdbID);
        datosEnvio.append('nombre_pelicula', datosPeli.Title);
        datosEnvio.append('poster', datosPeli.Poster);
        datosEnvio.append('anyo', datosPeli.Year);
        fetch('http://moviequiz4.alumnes.inspedralbes.cat/back/mvc/peliculas_valoracion.php', {
            method: 'POST',
            body: datosEnvio
        });
    }
});

document.getElementById("enviar").addEventListener("click", function() {
    let nombre= document.getElementById("search").value;
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=7879d824&s=${nombre}`).then(function(res) {
        return res.json();
    }).then(function(data) {
        console.log(data);
        let pelis = "";
        datos = data;
        for(let i = 0; i < 10; i++){
            pelis += `<div class="col s6 m4 l3">
                            <div class="card">
                                <div class="card-image">
                                    <img src="${datos.Search[i].Poster}" class="style_img" height="400px">
                                    <a id="${i}" class="add btn-floating halfway-fab modal-trigger waves-effect waves-light red" href="#valor${i}"><i class="add material-icons">add</i></a>
                                </div>
                                <div class="card-content">
                                    <span>${datos.Search[i].Title}</span><br>
                                    <span>${datos.Search[i].Year}</span>
                                </div>
                            </div>
                            <div id="valor${i}" class="modal">
                                <div class="modal-content">
                                    <h4 class="center-align cyan-text text-darken-3">${datos.Search[i].Title} (${datos.Search[i].Year})</h4>
                                    </br>
                                <div>
                                    <label>
                                        <input type="checkbox" id="fav" name="favorito" value="1"/>
                                        <span>Marcar como favorito</span>
                                    </label>
                                </div>
                                <div id="formValue">
                                    </br>
                                    <h5 class="red-text darken-1">Valoración</h5>
                                    </br>
                                    <label>
                                        <input name="puntuacion" type="radio" value="1"/>
                                        <span>1</span>
                                    </label>
                                    <label>
                                        <input name="puntuacion" type="radio" value="2"/>
                                        <span>2</span>
                                    </label>
                                    <label>
                                        <input name="puntuacion" type="radio" value="3"/>
                                        <span>3</span>
                                    </label>
                                    <label>
                                        <input name="puntuacion" type="radio" value="4"/>
                                        <span>4</span>
                                    </label>
                                    <label>
                                        <input name="puntuacion" type="radio" value="5"/>
                                        <span>5</span>
                                    </label>
                                </div>
                                <div class="input-field">
                                    <textarea id="comentario" class="materialize-textarea" data-length="200"></textarea>
                                    <label for="comentario">Comentario</label>
                                </div>
                                <button num="${i}" id="btn-guardar" class="guardar btn waves-effect waves-light"> Guardar </button>
                                <div id="divError" class="divError"><label class="error"><span style="font-size: 20px"> ! </span>Debes de iniciar sesión para poder hacer una valoración</label></div>
                            </div>
                            <div class="modal-footer">
                                <a href="#!" class="btn modal-close red"><i class="material-icons">close</i></a>
                            </div>
                        </div>
                    </div>`;
        }
        document.getElementById("peliculas").innerHTML = pelis;
    }).catch(function() {
        console.log("problema!");
    });
});

function titulo() {
    let titulo = `<center><h4>Minijuego</h4>
                       <h6>Este minijuego trata de una competición de cuantas repuestas se encierta y se mostrara en la tabla de clasificación</h6></center>
                       <div id="juego_peli"></div>`;
    
    document.getElementById("juego").innerHTML = titulo;
}

document.getElementById("minijuegos").addEventListener('click', function (e){
    fetch('http://moviequiz4.alumnes.inspedralbes.cat/back/JSON/output_generar_partida.json').then(function(res) {
        return res.json();
    }).then(function(data) {
        console.log(data);
        titulo();
        let juego = "";
        datos = data;
        for (let i = 0; i < data.peliculas.length; i++) {
            juego += `<div class="row black-text">
                                <div class="col s5">
                                    <img class="center" src="${data.peliculas[i].Poster}">
                                </div>
                                <div class="col s5 center">
                                    <h4 class="black-text center" style="margin: 4%; margin-top: 10%">${data.peliculas[i].Nombre}</h4>
                                </div>
                                <div class="col s5 center white-text">
                                    <div name="formValue">
                                        <label>
                                            <input name="puntuacion${i}" type="radio" value="${data.peliculas[i].choice1}"/>
                                            <span>${data.peliculas[i].choice1}</span>
                                        </label>
                                        <br>
                                        <label>
                                            <input name="puntuacion${i}" type="radio" value="${data.peliculas[i].choice2}"/>
                                            <span>${data.peliculas[i].choice2}</span>
                                        </label>
                                        <br>
                                        <label>
                                            <input name="puntuacion${i}" type="radio" value="${data.peliculas[i].choice3}"/>
                                            <span>${data.peliculas[i].choice3}</span>
                                        </label>
                                        <br>
                                        <label>
                                            <input name="puntuacion${i}" type="radio" value="${data.peliculas[i].choice4}"/>
                                            <span>${data.peliculas[i].choice4}</span>
                                        </label>
                                    </div>
                                </div>
                              </div>`;
        }
        juego += `<center><button id="btn-guardar" class="guardar btn waves-effect waves-light"> Guardar </button></center>`
        document.getElementById("juego_peli").innerHTML = juego;

        document.getElementById("btn-guardar").addEventListener("click",function(e){
            console.log(e.target);

            let puntuacion0 = document.querySelector("[name='puntuacion0']:checked").value;
            let puntuacion1 = document.querySelector("[name='puntuacion1']:checked").value;
            let puntuacion2 = document.querySelector("[name='puntuacion2']:checked").value;
            let puntuacion3 = document.querySelector("[name='puntuacion3']:checked").value;
            let puntuacion4 = document.querySelector("[name='puntuacion3']:checked").value;
            console.log(puntuacion1);

            const datosEnvio = new FormData();
            datosEnvio.append('1', puntuacion0);
            datosEnvio.append('2', puntuacion1);
            datosEnvio.append('3', puntuacion2);
            datosEnvio.append('4', puntuacion3);
            datosEnvio.append('5', puntuacion4);
            fetch('http://moviequiz4.alumnes.inspedralbes.cat/back/mvc/respuestas.php', {
                method: 'POST',
                body: datosEnvio
            });
        });
    });
});
