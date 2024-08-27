window.onload = function() {
    let textoCriptografado = localStorage.getItem('textoCriptografado');

    if (textoCriptografado) {
        document.getElementById('resultado').innerText = textoCriptografado;
    } else {
        document.getElementById('resultado').innerText = 'Nenhum texto criptografado encontrado.';
    }
}

function copiar() {
    var texto = document.getElementById("resultado").innerText;
    var inputTemp = document.createElement("input");
    inputTemp.value = texto;
    document.body.appendChild(inputTemp);
    inputTemp.select();
    inputTemp.setSelectionRange(0, 99999);
    if (texto == "") {
        alert("Insira um texto primeiro")
        return
    }

    if (texto == " ") {
        alert("Insira um texto primeiro")
        return
    }
    document.execCommand("copy");
    document.body.removeChild(inputTemp);
    alert("Texto copiado: " + texto);
}

function descriptografar(textoCriptografado) {
    return textoCriptografado
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

function aoClicarNoBotao() {
    let textoOriginal = document.getElementById('textbox1').value;
    let textoCriptografado = criptografar(textoOriginal);
    localStorage.setItem('textoCriptografado', textoCriptografado);
    document.getElementById('resultado').innerText = textoCriptografado;
    document.getElementById('textbox1').value = ''; // Limpa a caixa de texto
}

function aoClicarNoBotao1() {
    let textoCriptografado = document.getElementById('resultado').innerText;
    let textoDescriptografado = descriptografar(textoCriptografado);
    document.getElementById('resultado').innerText = textoDescriptografado;
    document.getElementById('textbox1').value = ''; // Limpa a caixa de texto
}

function criptografar(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}
