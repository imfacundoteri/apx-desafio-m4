function header() {
  const headerEl = document.querySelector(".header");
  headerEl.innerHTML = `
        <nav class="nav">
          <a href="./">
            <img src="./img/logo.png" alt="Logo" />
          </a>
          <img id="window-open" src="./img/home/burger.svg" alt="Open menu" />
          <div class="window">
            <img
              id="window-close"
              src="./img/home/close.png"
              alt="Close menu"
            />
            <div class="window__content">
              <a href="./portfolio.html">Portfolio</a>
              <a href="./services.html">Servicios</a>
              <a href="./contact.html">Contacto</a>
            </div>
          </div>
          <div class="nav__links-container">
            <a href="./portfolio.html">Portfolio</a>
            <a href="./services.html">Servicios</a>
            <a href="./contact.html">Contacto</a>
          </div>
        </nav>
        
  `;

  const windowOpenEl = document.querySelector("#window-open");
  const windowCloseEl = document.querySelector("#window-close");
  const windowEl = document.querySelector(".window");

  windowOpenEl.addEventListener("click", () => {
    windowEl.style.display = "flex";
  });

  windowCloseEl.addEventListener("click", () => {
    windowEl.style.display = "";
  });
}
