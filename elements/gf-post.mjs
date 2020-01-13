import {LitElement, html, css} from 'https://unpkg.com/lit-element/lit-element.js?module';
    
class GFApp extends LitElement {

  static get properties() {
    return {
      title: {
        type: String,
      }
    };
  }
  
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  render() {
    return html`
      <article>
        <h1>${ this.title }</h1>
        <slot>
          No body.
        </slot>
      </article>
    `;
  }
}

customElements.define('gf-app', GFApp);