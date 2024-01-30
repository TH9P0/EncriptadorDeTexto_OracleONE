function encriptar(){
    let fraseUsuario = document.getElementById('ingresoUsuario').value;
    let textoProcesado = document.getElementById('textoProcesado');
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
    document.getElementById('copiar').removeAttribute('disabled');
    textoProcesado.innerHTML = fraseEncriptada;
}

function desencriptar(){
    let fraseEncriptada = document.getElementById('ingresoUsuario').value;
    let textoProcesado = document.getElementById('textoProcesado');
    
    do{
        fraseEncriptada = fraseEncriptada.replace('ai','a');
    }while(fraseEncriptada.includes('ai'));

    do{
        fraseEncriptada = fraseEncriptada.replace('enter','e');
    }while(fraseEncriptada.includes('enter'));

    do{
        fraseEncriptada = fraseEncriptada.replace('imes','i');
    }while(fraseEncriptada.includes('imes'));

    do{
        fraseEncriptada = fraseEncriptada.replace('ober','o');
    }while(fraseEncriptada.includes('ober'));

    do{
        fraseEncriptada = fraseEncriptada.replace('ufat','u');
    }while(fraseEncriptada.includes('ufat'));

    document.getElementById('ingresoUsuario').value = "";
    document.getElementById('copiar').removeAttribute('disabled');
    textoProcesado.innerHTML = fraseEncriptada;
}

function copiar(){
    let copyText = document.getElementById("textoProcesado");
    copyText.select();
    document.execCommand("copy");
    textoProcesado.innerHTML = '';
    document.getElementById('copiar').setAttribute('disabled',true);
    alert('Texto copiado con exito');
    document.querySelector("#copy").addEventListener("click", copy);
}