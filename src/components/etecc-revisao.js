export class EteccRevisao extends HTMLElement {

    constructor() {
        super();

        // Permite mudar a versão via atributo
        const version = this.getAttribute('version') || '000';
        const author = this.getAttribute('author') || 'Equipe ETECC';
        const date = this.getAttribute('date') || '00/00/0000';

        this.attachShadow({ mode: "open" });

        this.shadowRoot.innerHTML = `
			<style>
				.revision-box {
					font-family: system-ui, sans-serif;
					font-size: 14px;
					color: #333;
					border-top: 2px solid #ec1b39;
					margin-top: 2em;
					padding-top: 0.8em;
					text-align: center;
				}
				.version {
					font-weight: bold;
					color: #ec1b39;
				}
                .code {
                    /* Aparência de botão escuro e arredondado */
                    display: inline-block; /* Permite que o span tenha padding, margem, etc., mas só ocupe o espaço necessário */
                    padding: 0.1em 0.5em; /* Preenchimento interno (altura e largura) */
                    background-color: #24292e; /* Cor de fundo escura, um preto quase carvão */
                    color: #ffffff; /* Cor do texto branca ou bem clara */
                    border-radius: 6px; /* Bordas arredondadas */
                    font-family: monospace, sans-serif; /* Fonte que simula código ou tecla */
                    font-weight: bold; /* Deixa o texto em negrito */
                    line-height: 1.5; /* Altura da linha, para o texto não ficar muito esmagado */
			</style>

			<div class="revision-box">
				<span><b>Revisão</b>: <span class="version">${version}</span></span> —
				<span>Atualizado em: ${date}</span> — por
				<span class="code"> ${author}</span>
			</div>
		`;
    }

    // Atualiza dinamicamente quando atributos mudarem
    static get observedAttributes() {
        return ['version', 'author', 'date'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) this.constructor.call(this);
    }
}
