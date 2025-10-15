export class BTNVoltarTopo extends HTMLElement {
    constructor() {
        super();
        // Não use o Shadow DOM para este componente
        // this.attachShadow({ mode: "open" }); // LINHA REMOVIDA

        this.innerHTML = `
            <link href="/src/css/bootstrap.min.css" rel="stylesheet">
            
            <div class="d-grid gap-2">
                <a href="#" id="btn-voltar-topo" 
                    class="btn btn-dark p-1" 
                    title="Voltar ao Topo" role="button">
                        
                        <i class="fas fa-arrow-up">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-424-56-56 280-280 280 280-56 56-224-223-224 223Z"/></svg>
                        </i>        
                </a>
            </div>
        `;
    }
}

// Não se esqueça de registrar seu componente
