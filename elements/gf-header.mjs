import {LitElement, html, css} from 'https://unpkg.com/lit-element/lit-element.js?module';
import commonStyles from './common-styles.mjs';
    
class GFHeader extends LitElement {

  static get properties() {
    return {};
  }
  
  static get styles() {
    return [
      commonStyles,
      css`
        :host {
          display: flex;
          flex-direction: row;
        }
        
        img {
          padding: 1em 0;
          width: 5em;
          height: 5em;
        }

        .title {
          margin: auto 1em auto 0.5em;
        }
        
        h1 {
          margin: 0 auto 0.1em auto;
        }

        span {
          margin-left: 1.5em;
        }
      `
    ];
  }

  render() {
    return html`
      <a href="/"><img src="../assets/moon.png"></a>
      <div class="title">
        <h1>ThoseGrapefruits</h1>
        <span>Nothing a nap can't fix.</span>
      </div>
    `;
  }
}

customElements.define('gf-header', GFHeader);