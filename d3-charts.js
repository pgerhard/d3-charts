import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `d3-charts`
 * Polymer 3 element for D3 chart
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class D3Charts extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'd3-charts',
      },
    };
  }
}

window.customElements.define('d3-charts', D3Charts);
