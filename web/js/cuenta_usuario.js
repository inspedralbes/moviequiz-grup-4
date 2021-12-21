fetch('http://moviequiz4.alumnes.inspedralbes.cat/back/mvc/login.php').then(function(res) {
    return res.json();
}).then(function(data) {
    console.log(data);
    let htmlstr = "";
    htmlstr += `<h5>Informacion de usuario:</h5>
                <p><i class="tiny material-icons">chevron_right</i> Nombre: ${data.nombre}</p>
                <p><i class="tiny material-icons">chevron_right</i> Apellido: ${data.apellido}</p>
                <p><i class="tiny material-icons">chevron_right</i> Correo: ${data.correo}</p>
            </ul>`;
    document.getElementById("perfil").innerHTML = htmlstr;
});
fetch('http://moviequiz4.alumnes.inspedralbes.cat/back/mvc/peliculas_valoracion.php').then(function(res) {
    return res.json();
}).then(function(data) {
    console.log(data);
    let fav = "";
    let len = data.peliculas.length;
    for (let i = 0; i < len;i++){
        fav += `<img src="${data.peliculas[i][0].poster}">
                <p>Nombre: ${data.peliculas[i][0].nombre_pelicula}</p>
                <p>Año: ${data.peliculas[i][0].anyo}</p>
                <p>Valoracion: ${data.favoritos[i].puntuacion}</p>
                <p>Comentario: ${data.favoritos[i].comentario}</p>`;
    }
    document.getElementById("favoritas").innerHTML = fav;
});
document.getElementById("btn-contrasena").addEventListener('click', function (){
    let pass = document.getElementById("contrasena").value;
    console.log(pass);

    let datosEnvio = new FormData();
    datosEnvio.append('contrasena',pass);

    fetch('http://moviequiz4.alumnes.inspedralbes.cat/back/mvc/registro.php',{
        method: 'POST',
        body: datosEnvio
    }).then(function(res){
        return res.json();
    }).then(function(data) {
        console.log(data);
    });
});
