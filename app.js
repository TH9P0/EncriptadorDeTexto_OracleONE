function encriptar(){
    let fraseUsuario = document.getElementById('ingresoUsuario').value;
    let fraseEncriptada;

    console.log(fraseUsuario);

    for(i=0; i<fraseUsuario.lenght; i++){
        if(fraseUsuario.charAt(i) == 'a'){
            fraseEncriptada = fraseEncriptada.concat("ai");
        }
        else if(fraseUsuario.charAt(i) == 'e'){
            fraseEncriptada = fraseEncriptada.concat("enter");
        }
        else if(fraseUsuario.charAt(i) == 'i'){
            fraseEncriptada = fraseEncriptada.concat("imes");
        }
        else if(fraseUsuario.charAt(i) == 'o'){
            fraseEncriptada = fraseEncriptada.concat('ober');
        }
        else if(fraseUsuario.charAt(i) == 'u'){
            fraseEncriptada = fraseEncriptada.concat('ufat')
        }
        else{
            fraseEncriptada = fraseEncriptada.concat(fraseUsuario.charAt(i));
        }
    
        let f = document.querySelector(textarea);
        f.innerHTML = fraseEncriptada;
    }
    

    console.log(fraseEncriptada);
}

function desencriptar(){

}

function copiar(){

}