const imgMeninoLupa = document.querySelector('#imgLupa');
const imgFrame = document.querySelector('#imgFrame');
const saidaTexto = document.querySelector('#saida');
const btnCopiar = document.querySelector('#copiar'); 

function codificaTexto(){
   
    const textArea = document.querySelector("#entrada").value;

    textTratado = textArea.toLowerCase().normalize('NFD').replace(/[^a-zA-Zs]/g, " ");

    if(textTratado === textArea){
        
        let textCod = textArea.replace(/i/g, "imes");
        let textCod1 = textCod.replace(/a/g, "ai");
        let textCod2 = textCod1.replace(/e/g, "enter");   
        let textCod3 = textCod2.replace(/o/g, "ober");
        let textcriptografado = textCod3.replace(/u/g, "ufat");
        saidaTexto.value = textcriptografado;
        document.querySelector('#entrada').value='';

    }else{

        alert('Apenas letras minúsculas sem acentuação e sem caracteres especiais!');
    }

    if(saidaTexto.textLength >= 1){
        btnCopiar.style.opacity = '1';
        imgMeninoLupa.style.opacity = '0';
        imgFrame.style.opacity = '0';
    }else{
        btnCopiar.style.opacity = '0';
        imgMeninoLupa.style.opacity = '1';
        imgFrame.style.opacity = '1';
    }
 }

function decodificaTexto(){
 
    const textArea = document.querySelector("#entrada").value;
    document.querySelector("#entrada").value='';
   
    let textDecod = textArea.replace(/ai/g, "a");
    let textDecod1 = textDecod.replace(/enter/g, "e");
    let textDecod2 = textDecod1.replace(/imes/g, "i");
    let textDecod3 = textDecod2.replace(/ober/g, "o");
    let textDescriptografado = textDecod3.replace(/ufat/g, "u");
    saidaTexto.value = textDescriptografado;

    if(saidaTexto.textLength >= 1){
        btnCopiar.style.opacity = '1';
        imgMeninoLupa.style.opacity = '0';
        imgFrame.style.opacity = '0';
    }else{
        btnCopiar.style.opacity = '0';
        imgMeninoLupa.style.opacity = '1';
        imgFrame.style.opacity = '1';
    }  
}

btnCopiar.addEventListener("click", copiaTexto);

function copiaTexto(evento) {
    
    navigator.clipboard.writeText(saidaTexto.value);

    btnCopiar.classList.add('ativo');
    btnCopiar.innerText = 'TEXTO COPIADO';

    setTimeout(()=>{
    btnCopiar.classList.remove('ativo');
    btnCopiar.innerText = 'COPIAR';
    }, 1000);
}