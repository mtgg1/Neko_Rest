class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header>
    <a href="#" class="logo"><i class="fas fa-cat "></i>Neko Rest</a>
    <div class="icons">
        <button id="menu-bars" aria-label="Menu Pencarian" class="fas fa-bars"></button>
    </div>
    
    <nav id="navdrawer" class="navbar"> 
        <a class="active" href="#/home">Home</a>
        <a href="#/favorite">Favorite</a>
        <a target="_blank" href="https://github.com/Yuuuutoo">About Us</a>
    </nav>
    </header>
            `;
  }
}

customElements.define('navbar-section', CustomNavbar);
