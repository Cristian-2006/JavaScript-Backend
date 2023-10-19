import { LitElement, html } from "lit-element";

class MyElement extends LitElement{
    static get properties(){
        return{
            num1:{type:Number}
        };
    }

    convertToCelsius(degrees){
        return (degrees - 32) * 5 / 9;
    }

    render (){
        return html`
            <label for="num1">Número 1:</label>
            <input type="number" id="num1" .value=${this.num1} @input=${(e) => this.num1 = e.target.value}>
            <br>

            <br>
            <div>El resultado de la conversión a Celsius es: ${this.convertToCelsius(this.num1)}</div>
            <br><br><br>
        `;
    }
}

customElements.define('my-element', MyElement);