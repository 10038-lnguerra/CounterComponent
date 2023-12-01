class CounterComponent extends HTMLElement {
  constructor() {
    super();
    this._counterValue = 0; // Estado interno del contador
    this.attachShadow({ mode: 'open' });
    this.setupTemplate();
    this.setupEvents();
    this.render();
  }

  setupTemplate() {
    this.shadowRoot.innerHTML = `
      <div>
        <div id="counter-container">
          <p>Contador: <span id="counter-value">${this._counterValue}</span></p>
        </div>
        <div id="button-container">
          <button id="increment">Incrementar</button>
          <button id="decrement">Decrementar</button>
        </div>
      </div>
    `;
  }

  // Funciones de incremento y decremento del contador
  setupEvents() {
    this.shadowRoot.getElementById('increment').addEventListener('click', () => this.incrementCounter());
    this.shadowRoot.getElementById('decrement').addEventListener('click', () => this.decrementCounter());
  }

  incrementCounter() {
    this._counterValue++;
    this.render();
  }

  decrementCounter() {
    this._counterValue--;
    this.render();
  }

  render() {
    this.shadowRoot.getElementById('counter-value').textContent = this._counterValue;
  }
}

customElements.define('counter-component', CounterComponent);
