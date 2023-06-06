/* eslint-disable class-methods-use-this */
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
    this._attachEventListeners();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  _attachEventListeners() {
    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        document.querySelector('#maincontent').focus();
      }
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    try {
      this._content.innerHTML = await page.render();
      if (page.afterRender) {
        await page.afterRender();
      }
    } catch (error) {
      this._showErrorPage(error);
    }
  }

  _showErrorPage(error) {
    this._content.innerHTML = `<p>Error: ${error.message}</p>`;
  }
}

export default App;
