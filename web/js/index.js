document.getElementById("botonLogin").addEventListener('click', function(){
    let email = document.getElementById("correo").value;
    let pass = document.getElementById("password").value;

    console.log(email);
    console.log(pass);

    let datosEnvio = new FormData();
    datosEnvio.append('correo',email);
    datosEnvio.append('password',pass);

    document.getElementById("botonLogin").setAttribute("style","display: none;");
    document.getElementById("loading").removeAttribute("hidden");

    fetch('http://localhost:63342/moviequiz-grup-4/back/php/login.php',{
        method: 'POST',
        body: datosEnvio
    }).then(function(res){
        return res.json();
    }).then(function(data){
        console.log(data);
        document.getElementById("login").setAttribute("style","display: none;");
        htmlstr = "";
        htmlstr += `<h5>Bienvenido ${data.nombre} ${data.apellido}</h5>
                    <h5>${data.correo}</h5>`;
        document.getElementById("inicio").innerHTML = htmlstr;
    }).catch(function(){
        //console.log("Problem!");
    });
});

document.getElementById("enviar").addEventListener("click", function(){
    let nombre= document.getElementById("search").value;
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=7879d824&s=${nombre}`).then(function(res) {
    return res.json();
    }).then(function(data) {
    console.log(data);

    let pelis = "";
    for(i=0; i<10; i++){
        datos = data.Search[i];
        pelis += `<div class="col s6 m4 l3">
                    <div class="card">
                        <div class="card-image">
                            <img src="${datos.Poster}" class="style_img" height="400px">
                            <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">+</i></a>
                        </div>
                        <div class="card-content card-title">
                            <span>${datos.Title}</span><br>
                            <span>${datos.Year}</span>
                        </div>
                    </div>
                 </div>`;
    }
    document.getElementById("peliculas").innerHTML=pelis;
    }).catch(function() {
    //console.log("problem!");
    });
});

function generarModal(nombre) {
    var modalHtml = `<div class="modal-content">
                        <h4 class="center-align cyan-text text-darken-3">${datos.Title}</h4>
                        </br>
                        <div>
                            <label>
                                <input type="checkbox" id="fav" name="fav"/>
                                <span>Afegir a favorites </span>
                            </label>
                        </div>

                        <div id="formRadio">
                        </br>
                            <h5 class="red-text darken-1">Valoració</h5>
                            </br>

                            <label>
                                <input name="valoracio" type="radio" value="1"/>
                                <span>1</span>
                            </label>
                            <label>
                                <input name="valoracio" type="radio" value="2"/>
                                <span>2</span>
                            </label>
                            <label>
                                <input name="valoracio" type="radio" value="3"/>
                                <span>3</span>
                            </label>
                            <label>
                                <input name="valoracio" type="radio" value="4"/>
                                <span>4</span>
                            </label>
                            <label>
                                <input name="valoracio" type="radio" value="5"/>
                                <span>5</span>
                            </label>
                        </div>

                        <div class="input-field">
                            <textarea id="comentario" class="materialize-textarea" data-length="200"></textarea>
                            <label for="comentario">Comentari</label>
                        </div>

                        <button id="btn-guardar" class="btn waves-effect waves-light"> Guardar </button>
                    </div>
                    <div class="modal-footer">
                        <a href="#!" class="btn modal-close red "><i class="material-icons red">close</i></a>
                    </div>`;
    return modalHtml;
}