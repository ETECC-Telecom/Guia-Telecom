export class EteccHead extends HTMLElement{
    
	constructor(){
        
		super()
        
        const dataAtual = new Date();
        const anoCompleto = dataAtual.getFullYear();
		this.attachShadow({mode:"open"})
		this.shadowRoot.innerHTML=
        `

        <link href="/src/css/bootstrap.min.css" rel="stylesheet">
        <script src="/src/js/bootstrap.bundle.min.js"></script>

        <div 
            class="p-5 text-white text-center"
            style="background-color: #ec1b39; background-image: url('/static/pattern2.webp'); background-repeat: repeat; background-position: center; background-size: 100px;"
            >
            <img src="/static/EteccLogo.webp" class="mx-auto d-block img-fluid w-50"
                alt="ETECC logo in bold stylized letters with the word TELECOM below, set against a light background. The design conveys a modern and professional tone.">
            <br>
            <h2>ETECC Guia Telecom</h2>
        </div>

		`
	}
}