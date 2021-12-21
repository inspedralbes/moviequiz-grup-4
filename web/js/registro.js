document.getElementById("registro").addEventListener('click', function(){
    let n = document.getElementById("nombre").value;
    let a = document.getElementById("apellido").value;
    let c = document.getElementById("correo").value;
    let contr = document.getElementById("contrasena").value;

    console.log(n);
    console.log(a);
    console.log(c);
    console.log(contr);

    let datosEnvio = new FormData();
    datosEnvio.append('nombre',n);
    datosEnvio.append('apellido',a);
    datosEnvio.append('correo',c);
    datosEnvio.append('contrasena',contr);

    //document.getElementById("botonLogin").setAttribute("style","display: none;");
    //document.getElementById("loading").removeAttribute("hidden");

    fetch('http://moviequiz4.alumnes.inspedralbes.cat/back/mvc/registro.php',{
        method: 'POST',
        body: datosEnvio
    }).then(function(res){
        return res.json();
    }).then(function(data){
        console.log(data);
        document.getElementById("registro").setAttribute("style","display: none;");
        htmlstr = "";
        htmlstr += `<h1>${data.mensage.message} ${data.correo}</h1>`;
        document.getElementById("registrar").innerHTML = htmlstr;
    }).catch(function(){
        //console.log("Problem!");
    });
});