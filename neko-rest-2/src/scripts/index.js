import 'regenerator-runtime'; /* for async await transpile */

// import css
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/components/detail.css';
import '../styles/components/footer.css';

// import component html
import './components/footer';
import './components/navbar';
import './components/hero';

import App from './views/app';
import swRegister from './utils/sw-register';

// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.getElementById('menu-bars'),
  drawer: document.getElementById('navdrawer'),
  content: document.getElementById('maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
