function addProjects() {
  const content = document.querySelector(".portfolio__content");

  const projects = fetch(
    "https://cdn.contentful.com//spaces/g5j1qasa07vi/environments/master/entries?access_token=uVXfhMGvKILZB3io3VHumcnft0ELIiQu2XIW_-vQ1j0&content_type=portfolio"
  )
    .then((res) => res.json())
    .then((data) => {
      const fields = data.items.map((i) => {
        return {
          title: i.fields.title,
          description: i.fields.description,
          link: i.fields.link,
        };
      });
      return fields;
    });

  projects.then((res) => {
    for (let item of res) {
      const container = document.createElement("div");
      const title = document.createElement("h3");
      const description = document.createElement("p");
      const image = document.createElement("img");
      const link = document.createElement("a");
      title.textContent = item.title;
      description.textContent = item.description;
      link.textContent = item.link;
      link.href = "http://apx.school";
      image.src =
        "https://images.ctfassets.net/g5j1qasa07vi/5PkaIuTMUzMxPz2GeKSJFU/c756e8ac24e146bf5d78088bd633f2df/services-cover.png";
      content.appendChild(container);
      container.appendChild(image);
      container.appendChild(title);
      container.appendChild(description);
      container.appendChild(link);
    }
  });
}

(function () {
  header();
  addProjects();
  footer();
})();
