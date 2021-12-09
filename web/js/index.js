document.getElementById("botonLogin").addEventListener('click', function(){
    let email = document.getElementById("correo").value;
    let pass = document.getElementById("password").value;

    console.log(email);
    console.log(pass);

    let datosEnvio = new FormData();
    datosEnvio.append('correo',email);
    datosEnvio.append('password',pass);

    /*document.getElementById("botlogin").setAttribute("style","display: none;");
    document.getElementById("loading").removeAttribute("hidden");*/

    fetch('http://localhost:63342/moviequiz-grup-4/back/php-login/login.php',{
        method: 'POST',
        body: datosEnvio
    }).then(function(res){
        return res.json();
    }).then(function(data){
        console.log(data);
        htmlstr = "";
        htmlstr += `<h2>Bienvenido ${data.nombre}</h2>
                    <h2>${data.correo}</h2>`;
        document.getElementById("inicio").innerHTML = htmlstr;
    }).catch(function(){
        console.log("Problem!");
    });
});