import './gf-header.mjs';
import {LitElement, html, css} from 'https://unpkg.com/lit-element/lit-element.js?module';
    
class GFApp extends LitElement {

  static get properties() {
    return {};
  }
  
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        max-width: 40em;
        margin: 1em auto;
      }

      a {
        color: var(--gf-accent);
      }

      a:visited {
        color: var(--gf-accent-rich);
      }
    `;
  }

  render() {
    return html`
      <header>
        <gf-header></gf-header>
      </header>
      <main>
        <slot>
          <h2>Posts</h2>
          <ul>
              <li><a href="posts/test-post.html">test post please ignore</a></li>
          </ul>
        </slot>
      </main>
    `;
  }
}

customElements.define('gf-app', GFApp);