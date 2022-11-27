const LINKS = [
  [ 'Home',  '/' ],
  [ 'About', '/about.html' ],
  [ 'GitHub', 'https://github.com/ThoseGrapefruits' ],
];

class GFHeader extends HTMLElement {
  constructor() {
    super();
    this.appendChild(renderNav());
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
              <a href="https://github.com/ThoseGrapefruits" target="_blank">GitHub</a>
            </div>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('gf-header', GFHeader);

function renderIcon() {
  let img = document.createElement('img');
  img.setAttribute('src', '../assets/moon.png');
  img.setAttribute('alt', 'Moon texture on transparent background');

  let a = document.createElement('a');
  a.setAttribute('href', '/');
  a.appendChild(img);

  return a;
}

function renderTitleAndLinks() {
  let h1 = document.createElement('h1');
  h1.appendChild(text('ThoseGrapefruits'));

  let row = document.createElement('div');
  row.classList.add('row');
  row.appendChild(renderLinks());

  let title = document.createElement('div');
  title.classList.add('title');
  title.appendChild(h1);
  title.appendChild(row);

  return title;
}

function renderLinks() {
  let links = document.createElement('div');
  links.classList.add('links');
  for (let anchor of renderLinkAnchors()) {
    links.appendChild(anchor);
  }

  return links;
}

function * renderLinkAnchors() {
  let start = true;

  for (let [ title, href ] of LINKS) {
    if (!start) {
      yield text(' / ');
    }

    start = false;

    let link = document.createElement('a');
    link.setAttribute('href', href);
    link.appendChild(text(title));

    if (!href.startsWith('/')) {
      link.setAttribute('target', '_blank');
    }

    yield link;
  }
}

function renderNav() {
  let nav = document.createElement('nav');
  nav.classList.add('row');
  nav.appendChild(renderIcon());
  nav.appendChild(renderTitleAndLinks());
  return nav;
}

function text(t) {
  return document.createTextNode(t);
}
