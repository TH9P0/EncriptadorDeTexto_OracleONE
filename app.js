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

    document.getElementById('ingresoUsuario').value = "";
    textoProcesado.innerHTML = fraseEncriptada;
    document.getElementById('copiar').removeAttribute('disabled');
}

function desencriptar(){
    let fraseUsuario = document.getElementById('ingresoUsuario').value;
    let fraseEncriptada = '';
    console.log(fraseUsuario);

    for(i=0; i<fraseUsuario.length; i++){
        if(fraseUsuario.includes('ai')){
            fraseEncriptada = fraseEncriptada + fraseUsuario.charAt(i);
            i++;
        }
        else if(fraseUsuario.includes('enter')){
            fraseEncriptada = fraseEncriptada + fraseUsuario.charAt(i);
            i = i + 4;
        }
        else if(fraseUsuario.includes('imes')){
            fraseEncriptada = fraseEncriptada + fraseUsuario.charAt(i);
            i = i + 3
        }
        else if(fraseUsuario.includes('ober')){
            fraseEncriptada = fraseEncriptada + fraseUsuario.charAt(i);
            i = i + 3;
        }
        else if(fraseUsuario.includes('ufat')){
            fraseEncriptada = fraseEncriptada + fraseUsuario.charAt(i);
            i = i + 3
        }
        else{
            fraseEncriptada = fraseEncriptada.concat(fraseUsuario.charAt(i));
        }
    }

    document.getElementById('ingresoUsuario').value = "";
    textoProcesado.innerHTML = fraseEncriptada;
    document.getElementById('copiar').removeAttribute('disabled');
}

function copiar(){
    let copyText = document.getElementById("textoProcesado");
    copyText.select();
    document.execCommand("copy");
    document.getElementById('textoProcesado').value = "";
    document.getElementById('copiar').setAttribute('disabled',true);
}
      
document.querySelector("#copy").addEventListener("click", copy);