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
/*fetch('http://moviequiz4.alumnes.inspedralbes.cat/back/mvc/cuenta_usuario.php').then(function(res) {
    return res.json();
}).then(function(data) {
    console.log(data);
});*/