function adiosJhon(){
    let jhon = document.querySelector("#jhon");
    jhon.style.display = "none";
}
function apareceBtn(){
    document.querySelector("#copy").removeAttribute("hidden");
}

function copiar(){
    let copiado = document.getElementById("desencripta-input").value;
    navigator.clipboard.writeText(copiado).then(() => {
      console.log("Texto copiado al portapapeles");
      let boton=document.getElementById("copy").innerHTML="copiado en portapapeles";
    }).catch((error) => {
      console.error("Error al copiar texto al portapapeles:", error);
    });
    
    
}
function revisarCadenaEnc() {
  let cadena = document.getElementById("encripta-input").value;
  let encriptado = "";
  for (let i = 0; i < cadena.length; i++) {
    switch (cadena[i]) {
      case "e":
        encriptado += "enter";
        break;
      case "i":
        encriptado += "imes";
        break;
      case "a":
        encriptado += "ai";
        break;
      case "o":
        encriptado += "ober";
        break;
      case "u":
        encriptado += "ufat";
        break;
      default:
        encriptado += cadena[i];
    }
  }
  document.getElementById("copy").innerHTML="copiar"
  return encriptado;
}



function revisarCadenaDesEnc() {
    let textoDesEnc =document.getElementById("encripta-input").value;
    document.getElementById("copy").innerHTML="copiar"
    return textoDesEnc.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
  }
  
function encriptar() {
    let msjEncriptado=revisarCadenaEnc();
    adiosJhon();
    document.getElementById("desencripta-input").value = msjEncriptado;
    apareceBtn();
    
}
function desencriptar(){
    let msjEncriptado=revisarCadenaDesEnc();
    adiosJhon();
    document.getElementById("desencripta-input").value = msjEncriptado;
    apareceBtn();
}
