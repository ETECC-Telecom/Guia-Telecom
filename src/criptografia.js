let textoCriptografado = "texte"; // Variável para armazenar o texto criptografado

function getValues() {
    const mensagem = document.getElementById('mensagem').value;
    const chave = document.getElementById('chave').value;
    return { mensagem, chave };
}

function criptografar() {
    const { mensagem, chave } = getValues();

    if (!mensagem || !chave) {
        alert("Preencha a mensagem e a chave!");
        return;
    }

    // PASSO 2: Usar o algoritmo AES do CryptoJS para criptografar.
    const encrypted = CryptoJS.AES.encrypt(mensagem, chave).toString();

    textoCriptografado = encrypted;

    document.getElementById('outputCriptografado').textContent = encrypted;
    document.getElementById('outputDescriptografado').textContent = '...';
    console.log("Criptografado:", encrypted);
}

function descriptografar() {
    const chave = document.getElementById('chave').value;

    if (!textoCriptografado || !chave) {
        alert("Primeiro, criptografe a mensagem!");
        return;
    }
    
    // PASSO 3: Usar o algoritmo AES do CryptoJS para descriptografar.
    // O resultado é um WordArray que precisa ser convertido para string UTF-8.
    try {
        const bytes  = CryptoJS.AES.decrypt(textoCriptografado, chave);
        const originalText = bytes.toString(CryptoJS.enc.Utf8);
        
        document.getElementById('outputDescriptografado').textContent = originalText;
        console.log("Descriptografado:", originalText);

    } catch (error) {
        document.getElementById('outputDescriptografado').textContent = 'ERRO na descriptografia (Chave incorreta?)';
        console.error("Erro de descriptografia:", error);
    }
}

window.addEventListener('load', function() {
    // Este código será executado APÓS a página e TODOS
    // os seus recursos (imagens, vídeos, etc.) estarem carregados.
    console.log("A página e todos os seus recursos estão totalmente carregados!");
    // Você pode chamar sua função aqui
});
