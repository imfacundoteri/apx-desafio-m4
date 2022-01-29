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
      const title = document.createElement("h3");
      const description = document.createElement("p");
      const image = document.createElement("img");
      const container = document.createElement("div");
      title.textContent = item.title;
      description.textContent = item.description;
      image.src =
        "https://images.ctfassets.net/g5j1qasa07vi/5PkaIuTMUzMxPz2GeKSJFU/c756e8ac24e146bf5d78088bd633f2df/services-cover.png";
      content.appendChild(container);
      container.appendChild(image);
      container.appendChild(title);
      container.appendChild(description);
    }
  });
}

(function () {
  header();
  addServices();
  footer();
})();
