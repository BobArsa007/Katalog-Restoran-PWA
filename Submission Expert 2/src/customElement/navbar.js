class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const nav = document.createElement('nav');
    const logoLink = document.createElement('a');
    logoLink.classList.add('brands');
    logoLink.href = '/';
    logoLink.textContent = 'GG';
    nav.appendChild(logoLink);

    const burgerButton = document.createElement('button');
    burgerButton.id = 'burger';
    burgerButton.classList.add('hamburger');
    burgerButton.href = '#';
    burgerButton.setAttribute('aria-label', 'navigation-menu');
    burgerButton.innerHTML = '<i class="fas fa-bars"></i>';
    nav.appendChild(burgerButton);

    const sidebar = document.createElement('ul');
    sidebar.id = 'sidebar';
    sidebar.classList.add('sidebar');

    const homeLink = document.createElement('li');
    const homeAnchor = document.createElement('a');
    homeAnchor.href = '/';
    homeAnchor.setAttribute('aria-label', 'Home');
    homeAnchor.textContent = 'Home';
    homeLink.appendChild(homeAnchor);
    sidebar.appendChild(homeLink);

    const favoriteLink = document.createElement('li');
    const favoriteAnchor = document.createElement('a');
    favoriteAnchor.href = '#/Favorite';
    favoriteAnchor.setAttribute('aria-label', 'Favorite');
    favoriteAnchor.textContent = 'Favorite';
    favoriteLink.appendChild(favoriteAnchor);
    sidebar.appendChild(favoriteLink);

    const aboutLink = document.createElement('li');
    const aboutAnchor = document.createElement('a');
    aboutAnchor.href = 'https://www.linkedin.com/in/bobbyarsa/';
    aboutAnchor.setAttribute('aria-label', 'About');
    aboutAnchor.textContent = 'About us';
    aboutLink.appendChild(aboutAnchor);
    sidebar.appendChild(aboutLink);

    nav.appendChild(sidebar);

    this.appendChild(nav);
  }
}

customElements.define('custom-navbar', CustomFooter);
