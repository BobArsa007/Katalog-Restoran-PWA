class CustomFooter extends HTMLElement {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const footer = document.createElement('footer');
    const paragraph = document.createElement('p');
    paragraph.innerHTML = '&copy; GastroGuide 2023';
    footer.appendChild(paragraph);
    this.appendChild(footer);
  }
}

customElements.define('custom-footer', CustomFooter);
