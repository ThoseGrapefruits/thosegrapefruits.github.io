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
          flex-direction: column;
        }
        
        img {
          padding: 1em 0;
          width: 5em;
          height: 5em;
        }

        .title {
          margin: auto 1em auto 0.5em;
        }

        .row {
          display: flex;
          flex-direction: row;
        }
        
        h1 {
          margin: 0 auto 0.1em auto;
        }

        span {
          margin-left: 1.5em;
        }

        nav {
          display: flex;
          flex-direction: row;
          width: 100%;
          padding: 1em;
        }

        .links {
          margin-top: auto;
          margin-bottom: auto;
        }
      `
    ];
  }

  render() {
    return html`
      <nav class="row">
        <a href="/">
          <img src="../assets/moon.png"
              alt="Moon texture on transparent background">
        </a>
        <div class="title">
          <h1>ThoseGrapefruits</h1>
          <span>It's nothing a nap can't fix.</span>
        </div>
      </nav>
      <div class="row">
        <div class="links">
          <a href="/">Home</a>
          /
          <a href="/about.html">About</a>
          /
          <a href="https://pellow.bandcamp.com/">Music</a>
          /
          <a href="https://thosegrapefruits.smugmug.com/">Photography</a>
        </div>
      </div>
    `;
  }
}

customElements.define('gf-header', GFHeader);