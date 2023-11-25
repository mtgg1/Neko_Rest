class CustomHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero" style="background-image: linear-gradient(rgba(0, 0, 5, .5), rgba(0, 0, 5, .5)), url('images/heros/hero-image_2.jpg');">
    <div class="heroinner">
        <h1 class="herotitle">Neko Rest</h1>
        <p class="herosubtitle">Find the best restaurants with Neko punch.</p>
    </div>
</div>
            `;
  }
}

customElements.define('hero-section', CustomHero);
