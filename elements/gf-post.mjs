import {LitElement, html, css} from 'https://unpkg.com/lit-element/lit-element.js?module';
import commonStyles from './common-styles.mjs';
    
class GFPost extends LitElement {

  static get properties() {
    return {
      title: {
        type: String,
      }
    };
  }
  
  static get styles() {
    return [
      commonStyles,
      css`
        :host {
          display: block;
        }
      `
    ];
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

customElements.define('gf-post', GFPost);