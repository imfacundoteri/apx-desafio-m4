function sendForm() {
  const form = document.querySelector(".contact__form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        to: value.email,
        message: value.message,
      }),
    })
      .then(() => {
        alert(`Mensaje enviado. Gracias ${value.name} por comunicarte!`);
      })
      .catch(() => {
        alert("Mensaje no enviado. Por favor intenta más tarde");
      });
    event.target.reset();
  });
}

function contact(el) {
  const contactEl = document.createElement("div");

  contactEl.innerHTML = `
    <section class="contact">
      <h2 class="contact__title"><span>Escribime</span></h2>
      <form class="contact__form">
        <label>
          <h3 class="contact__label">Nombre</h3>
          <input name="name" class="contact__input" type="text" />
        </label>
        <label>
          <h3 class="contact__label">Email</h3>
          <input name="email" class="contact__input" type="email" />
        </label>
        <label>
          <h3 class="contact__label">Mensaje</h3>
          <textarea name="message" class="contact__input contact__input--message"></textarea>
        </label>
        <div class="contact__submit-cont">
          <button class="contact__submit-button">Enviar</button>
        </div>
      </form>
    </section>
    `;

  el.appendChild(contactEl);

  sendForm();
}
