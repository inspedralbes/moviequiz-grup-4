document.getElementById("botonLogin").addEventListener('click', function(){
    let email = document.getElementById("correo").value;
    let pass = document.getElementById("pass").value;

    console.log(email);
    console.log(pass);

    const datosEnvio = new FormData();
    datosEnvio.append('correo',email);
    datosEnvio.append('pass',pass);

    /*document.getElementById("botlogin").setAttribute("style","display: none;");
    document.getElementById("loading").removeAttribute("hidden");*/

    fetch('http://moviequiz4.alumnes.inspedralbes.cat/back/php-login/login.php',{
        method: 'POST',
        body: datosEnvio
    }).then(function(res){
        return res.json();
    }).then(function(data){
        console.log(data);
        htmlstr = "";
        htmlstr += `<h2>Bienvenido ${data.correo}</h2>`;
        document.getElementById("inicio").innerHTML = htmlstr;
    }).catch(function(){
        console.log("Problem!");
    });
});