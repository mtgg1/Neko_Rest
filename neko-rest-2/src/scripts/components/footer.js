class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <footer>
            <p class="footer">Copyright © 2023 - Neko Rest</p>
            </footer>
          `;
  }
}

customElements.define('footer-section', CustomFooter);
