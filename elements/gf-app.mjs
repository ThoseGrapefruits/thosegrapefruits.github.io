import {LitElement, html, css} from 'https://unpkg.com/lit-element/lit-element.js?module';
import './gf-header.mjs';
import commonStyles from './common-styles.mjs';

class GFApp extends LitElement {

  static get properties() {
    return {};
  }
  
  static get styles() {
    return [
      commonStyles,
      css`
        :host {
          display: flex;
          flex-direction: column;
          max-width: 40em;
          margin: 1em auto;
        }
      `
    ]
  }

  render() {
    return html`
      <header>
        <gf-header></gf-header>
      </header>
      <main>
        <slot>
          Loading...
        </slot>
      </main>
    `;
  }
}

customElements.define('gf-app', GFApp);