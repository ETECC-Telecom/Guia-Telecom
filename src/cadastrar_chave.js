

function Cadastrar_Chave(){

    const CONTAINER = this.document.getElementById('container_alerta');
    CONTAINER.innerHTML = "";

    const CHAVE = document.getElementById('chave');

    localStorage.setItem("CHAVE", CHAVE.value);

    // Cria o elemento <div>
    const alertDiv = document.createElement('div');

    // Adiciona as classes Bootstrap
    alertDiv.className = 'alert alert-success mt-3';

    alertDiv.setAttribute('role', 'alert');

    // Define o texto interno
    alertDiv.textContent = 'Cadastro da Chave realizado com sucesso!';

    // Adiciona o elemento ao container
    CONTAINER.appendChild(alertDiv);

    

}

