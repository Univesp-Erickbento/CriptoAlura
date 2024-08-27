function criptografar1() {
    console.log("o botão criptografar foi clicado");
    let texto1 = document.getElementById('textbox1');
    console.log(texto1.value);
}

   // Função para descriptografar o texto
function descriptografar(texto) {
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

function criptografar(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

// Função que é executada quando o botão é clicado
function aoClicarNoBotao() {
    // Obtenha o valor do campo de texto
    let textoOriginal = document.getElementById('textbox1').value;

    // Criptografe o texto
    let textoCriptografado = criptografar(textoOriginal);

    // Salvar o texto criptografado no localStorage
    localStorage.setItem('textoCriptografado', textoCriptografado);

    // Redirecionar para a segunda página
    window.location.href = "./tela2.html";
}

// Função que é executada ao carregar a segunda página
function exibirTextoCriptografado() {
    // Obter o texto criptografado do localStorage
    let textoCriptografado = localStorage.getItem('textoCriptografado');

    // Exibir o texto criptografado no elemento da página
    document.getElementById('textoCriptografado').innerText = textoCriptografado;
}

// Função que é executada quando o botão de descriptografar é clicado


