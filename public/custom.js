class CustomCard extends HTMLElement {

	constructor(){
		super();
	}

	saludar(){
		setTimeout(()=>{
			alert('Hola!!!');
		}, 2000);
	}

	connectedCallback(){
		this.innerHTML = `
			<div style="display: inline-block; box-shadow: 1px 1px 8px 1px #ccc; border-radius: 4px; margin: 5px; padding: 15px; min-height: 10px; min-width: 100px;">
				<h3>My Custom Card</h3>
				<p>
					Esta es mi propia card creada con la api de custom element de JS.
				</p>
				button
			</div>
		`;
	}
}
window.customElements.define('custom-card', CustomCard);
