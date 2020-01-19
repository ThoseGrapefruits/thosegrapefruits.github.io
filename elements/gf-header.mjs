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
          <span>It's nothing a nap can't fix.</span>
          <div class="row">
            <div class="links">
              <a href="/">Home</a>
              /
              <a href="/about.html">About</a>
              /
              <a href="https://pellow.bandcamp.com/" target="_blank">Music</a>
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