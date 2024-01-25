let textoProcesado = document.getElementById('textoProcesado');

function encriptar(){
    let fraseUsuario = document.getElementById('ingresoUsuario').value;
    let fraseEncriptada = '';

    for(i=0; i<fraseUsuario.length; i++){
        if(fraseUsuario.charAt(i) == 'a'){
            fraseEncriptada = fraseEncriptada + "ai";
        }
        else if(fraseUsuario.charAt(i) == 'e'){
            fraseEncriptada = fraseEncriptada + "enter";
        }
        else if(fraseUsuario.charAt(i) == 'i'){
            fraseEncriptada = fraseEncriptada + "imes";
        }
        else if(fraseUsuario.charAt(i) == 'o'){
            fraseEncriptada = fraseEncriptada + "ober";
        }
        else if(fraseUsuario.charAt(i) == 'u'){
            fraseEncriptada = fraseEncriptada + "ufat";
        }
        else{
            fraseEncriptada = fraseEncriptada.concat(fraseUsuario.charAt(i));
        }
    }

    textoProcesado.innerHTML = fraseEncriptada;
    document.getElementById('copiar').removeAttribute('disabled');
}

function desencriptar(){
    let fraseUsuario = document.getElementById('ingresoUsuario').value;
    let fraseEncriptada = '';

    for(i=0; i<fraseUsuario.length; i++){
        if(fraseUsuario.charAt(i) == 'a'){
            fraseEncriptada = fraseEncriptada + fraseUsuario.charAt(i);
            i++;
        }
        else if(fraseUsuario.charAt(i) == 'e'){
            fraseEncriptada = fraseEncriptada + fraseUsuario.charAt(i);
            i = i + 4;
        }
        else if(fraseUsuario.charAt(i) == 'i'){
            fraseEncriptada = fraseEncriptada + fraseUsuario.charAt(i);
            i = i + 3
        }
        else if(fraseUsuario.charAt(i) == 'o'){
            fraseEncriptada = fraseEncriptada + fraseUsuario.charAt(i);
            i = i + 3;
        }
        else if(fraseUsuario.charAt(i) == 'u'){
            fraseEncriptada = fraseEncriptada + fraseUsuario.charAt(i);
            i = i + 3
        }
        else{
            fraseEncriptada = fraseEncriptada.concat(fraseUsuario.charAt(i));
        }
    }

    textoProcesado.innerHTML = fraseEncriptada;
    document.getElementById('copiar').removeAttribute('disabled');
}

function copiar(){
    let copyText = document.querySelector("textoProcesado");
    copyText.select();
    document.execCommand("copy");
}
      
document.querySelector("#copy").addEventListener("click", copy);