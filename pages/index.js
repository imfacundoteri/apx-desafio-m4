const client = contentful.createClient({
  space: "g5j1qasa07vi",
  accessToken: "uVXfhMGvKILZB3io3VHumcnft0ELIiQu2XIW_-vQ1j0",
  host: "https://cdn.contentful.com",
});

function addWelcome() {
  const titleEl = document.querySelector(".welcome__title");
  const subtitleEl = document.querySelector(".welcome__subtitle");

  client
    .getEntry("33aPd2ywdSUBj722lMepMh")
    .then((entry) => {
      titleEl.textContent = entry.fields.title;
      subtitleEl.innerText = entry.fields.subtitle;
    })
    .catch((err) => console.log(err));
}

function addAboutMe() {
  const imageEl = document.querySelector(".about-me__hero");
  const titleEl = document.querySelector(".about-me__title");
  const aboutEl = document.querySelector(".about-me__about");

  client
    .getEntry("7zokIlstv1OxuVS17cFTE4")
    .then((entry) => {
      imageEl.src =
        "https://images.ctfassets.net/g5j1qasa07vi/7AV46f0OxhTySWyHpjKgTf/128f5cbd9f3cb89580fc925605af7afa/hero.jpg";
      titleEl.textContent = entry.fields.title;
      aboutEl.innerText = entry.fields.about;
    })
    .catch((err) => console.log(err));
}

function addServices() {
  const content = document.querySelector(".services__content");

  const services = fetch(
    "https://cdn.contentful.com//spaces/g5j1qasa07vi/environments/master/entries?access_token=uVXfhMGvKILZB3io3VHumcnft0ELIiQu2XIW_-vQ1j0&content_type=services"
  )
    .then((res) => res.json())
    .then((data) => {
      const fields = data.items.map((i) => {
        return {
          title: i.fields.title,
          description: i.fields.description,
        };
      });
      return fields;
    });

  services.then((res) => {
    for (let item of res) {
      const image = document.createElement("img");
      const title = document.createElement("h3");
      const description = document.createElement("p");
      const container = document.createElement("div");
      title.textContent = item.title;
      description.textContent = item.description;
      image.src = "./img/services/services.svg";
      content.appendChild(container);
      container.appendChild(image);
      container.appendChild(title);
      container.appendChild(description);
    }
  });
}

(function () {
  header();
  addWelcome();
  addAboutMe();
  addServices();
  contact(document.querySelector("#contact"));
  footer();
})();
