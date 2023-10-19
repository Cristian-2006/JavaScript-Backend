import { LitElement, html } from "lit-element";

export class MyElement extends LitElement {
  static get properties() {
    return {
      legA: { type: Number },
      legB: { type: Number },
      hypotenuse: { type: Number },
    };
  }

  constructor() {
    super();
    this.legA = 0;
    this.legB = 0;
    this.hypotenuse = 0;
  }

  _calculateHypotenuse() {
    this.hypotenuse = Math.sqrt(this.legA ** 2 + this.legB ** 2);
  }

  render() {
    return html`
      <label for="legA">Leg A:</label>
      <input
        type="number"
        id="legA"
        .value=${this.legA}
        @input=${(e) => (this.legA = e.target.value)}
      />
      <br />
      <label for="legB">Leg B:</label>
      <input
        type="number"
        id="legB"
        .value=${this.legB}
        @input=${(e) => (this.legB = e.target.value)}
      />
      <br />
      <button @click=${this._calculateHypotenuse}>Calculate Hypotenuse</button>
      <br />
      <div>The hypotenuse is: ${this.hypotenuse}</div>
    `;
  }
}

customElements.define("sacar-hipotenusa", MyElement);