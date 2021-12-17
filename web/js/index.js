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
                document.getElementById("contrasena").setAttribute("style", "background-color: red;");
                htmlstr = "";
                htmlstr += `<h5>Vuelva ha escribir otra vez</h5>`;
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
        document.getElementById("formValue").addEventListener("click", function (e) {
            let puntuacion = e.target.parentElement.querySelector("[name='puntuacion']").value;
        });
        let favorito = (e.target.parentElement.querySelector("[name='fav']").checked == true) ? 1 : 0;
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
                                <!--<div id="divError" class="divError"><label class="error"><span style="font-size: 20px"> ! </span>Debes de iniciar sesión para poder hacer una valoración</label></div>-->
                            </div>
                            <div class="modal-footer">
                                <a href="#!" class="btn modal-close red"><i class="material-icons">close</i></a>
                            </div>
                        </div>
                    </div>`;
        }
        document.getElementById("peliculas").innerHTML = pelis;
        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems,{});
    }).catch(function() {
        console.log("problema!");
    });
});

document.getElementById("juego").addEventListener('click', function (){
    fetch('http://moviequiz4.alumnes.inspedralbes.cat/back/php/preguntas.php').then(function(res) {
        return res.json();
    }).then(function(data) {
        console.log(data);
        let juego = "";
        datos = data;
        for(let i = 0; i < 10; i++){
            juego += `<div id="valor${i}" class="juego">
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
                            <!--<div id="divError" class="divError"><label class="error"><span style="font-size: 20px"> ! </span>Debes de iniciar sesión para poder hacer una valoración</label></div>-->
                        </div>
                        <div class="modal-footer">
                            <a href="#!" class="btn modal-close red"><i class="material-icons">close</i></a>
                        </div>
                    </div>`;
    var juegos = document.querySelectorAll('.modal_juegos');
    M.Modal.initi(juegos,{});
});