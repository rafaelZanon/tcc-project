//Resposta em uma pagina html
const EmailConfirmado = (props) => {
   
    return (`
    <html>

<head>
    <title>Email Confirmado</title>
</head>

<body>
    <div class="box">
        <img src="http://192.168.1.105/img/logo.png" class="icon">
    </div>
    <h1>Confirmado!</h1>
</body>



<style>
    body {
        font-family: Arial, Helvetica, sans-serif;
        background-image: linear-gradient(to left top,
                #000000,
                #030303,
                #060606,
                #090909,
                #0c0c0c,
                #0e0e0e,
                #0f0f0f,
                #111111,
                #121212,
                #141414,
                #151515,
                #161616);
    }

    h1{
        color: white;
        position: absolute;
        left: 57%;
        padding: 10px;
        border-radius: 15px;
        width: 25%;
        top: 70%;
        transform: translate(-50%, -50%);
    }

    .box {
        color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, 0.6);
        padding: 15px;
        border-radius: 15px;
        width: 25%;
        top: 45%;
    }


    .icon {
        width: 100%;
    }
</style>

</html> `)
}

module.exports = {EmailConfirmado}