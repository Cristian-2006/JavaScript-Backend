import { LitElement, html } from "lit-element";

class MyElement extends LitElement{
    static get properties(){
        return{
            diametro:{type:Number},
            circunferencia:{type:Number},
            area:{type:Number}
        };
    }

    get radioparadiametro(){
        return this.diametro / 2;
    }

    get radioparacircunferencia(){
        return this.circunferencia / (2 * Math.PI);
    }

    get radioparaArea(){
        return Math.sqrt(this.area / Math.PI);
    }

    render (){
        return html`

           
            <label for="diametro">diametro:</label>
            <input type="number" id="diametro" .value=${this.diametro} @input=${(e) => this.diametro = e.target.value}>
            <br>
            <label for="area">Area:</label>
            <input type="number" id="area" .value=${this.area} @input=${(e) => this.area = e.target.value}>
            <br>

            <br>
            <div>el radio para diametro es: ${this.radioparadiametro}</div>
            <div>el radio para area es: ${this.radioparaArea}</div>
            
        `;
    }
}

customElements.define('calcular-radio-circulo', MyElement);