function footer() {
  const footerEl = document.querySelector(".footer");
  footerEl.innerHTML = `
        <div class="footer__container">
        <div class="footer__content">
          <a href="./"><img src="./img/logo.png" alt="Logo" /> </a>
          <div class="social-links">
            <div>
              <a target="__blank" href="https://www.instagram.com/ismateri/">Instagram</a>
              <img
                src="./img/footer/instagram.svg"
                alt="Instagram social link"
              />
            </div>
            <div>
              <a target="__blank" href="https://www.linkedin.com/">LinkedIn</a>
              <img
                src="./img/footer/linkedin.svg"
                alt="Instagram social link"
              />
            </div>
            <div>
              <a target="__blank" href="https://github.com/ismateri/">GitHub</a>
              <img src="./img/footer/github.svg" alt="Instagram social link" />
            </div>
          </div>
        </div>
      </div>
  `;
}
