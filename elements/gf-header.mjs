import {LitElement, html, css} from 'https://unpkg.com/lit-element/lit-element.js?module';

class GFHeader extends LitElement {

  static get properties() {
    return {};
  }

  createRenderRoot() {
    return this;
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
          <div class="row">
            <div class="links">
              <a href="/">Home</a>
              /
              <a href="/about.html">About</a>
              /
              <a href="https://thosegrapefruits.smugmug.com/" target="_blank">
                Photography
              </a>
            </div>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('gf-header', GFHeader);
