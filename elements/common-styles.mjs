import {css} from 'https://unpkg.com/lit-element/lit-element.js?module';

export default css`
  :host {
    font-family: 'Josefin Sans', sans-serif;
  }

  h1, h2, h3, h4, h5, h6,
  ::slotted(h1), ::slotted(h2), ::slotted(h3),
  ::slotted(h4), ::slotted(h5), ::slotted(h6)  {
    font-family: 'IM Fell Great Primer SC', serif;
    font-weight: 400;
  }

  a {
    color: var(--gf-accent);
  }

  a:visited {
    color: var(--gf-accent-rich);
  }
`;