AFRAME.registerComponent("info-banner", {
  schema: {
    itemId: { default: "", type: "string" },
  },
  update: function () {
    this.createBanner();
  },
  createBanner: function () {
    postersInfo = {
      "butterchicken": {
        banner_url: "./assets/posters/butter-chicken-banner.png",
        title: "Butter Chicken",
        cuisine_type: "Indian Cuisine",
        description:
          "Butter chicken was created in Delhi, India during the 1950s by Kundan Lal Gurjal and  Kundan Lal Jaggi. This cuisine is a delicious curry dinner that is known worldwide, and is known as one of the most popular Indian dishes. 'https://www.allrecipes.com/recipe/45957/chicken-makhani-indian-butter-chicken/'",
      },
      "chickenfajitas": {
        banner_url: "./assets/posters/chicken-fajitas-banner.jpg",
        title: "Chicken Fajitas",
        cuisine_type: "American Cuisine",
        description:
          "Chicken fajitas was a main Mexican dish created near the end of the 1930s in Texas, but then it became a famous American cuisine. It is an easy, delicious, and quick meal that can be paired with rice or tortillas. 'https://www.youtube.com/watch?v=xH2AwAMQNVM'",
      },
      "ratatouille": {
        banner_url: "./assets/posters/ratatouille-banner.jpg",
        title: "Ratatouille",
        cuisine_type: "French Cuisine",
        description:
          "Ratatouille originated from Nice, France, in the 18th Century. This dish can be made in many different ways, but uses the same ingredients in each. 'https://tasty.co/recipe/ratatouille'",
      },
      "squirrelfish": {
        banner_url: "./assets/posters/squirrel-fish-banner.jpg",
        title: "Squirrel Fish",
        cuisine_type: "Chinese Cuisine",
        description:
          "Squirrel Fish origniated from Suzhou, China in the Jiangsu Province. This cuisine is prepared by deboning and cutting the fish in an ornamental form. It is then deep-fried in batter, and has sweet and sour sauce poured over it. 'https://www.youtube.com/watch?v=2aqTiQ8dY6k'",
      },
    };
    const { itemId } = this.data;
console.log(itemId,'-----------')
    const fadeBackgroundEl = document.querySelector("#fadeBackground");

    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("id", `${itemId}-banner`);

    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 0.9,
      height: 1,
    });

    entityEl.setAttribute("material", { color: "#000" });
    entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });

    const item = postersInfo[itemId];

    const imageEl = this.createImageEl(item);
    const titleEl = this.createTitleEl(item);
    const descriptionEl = this.createDescriptionEl(item);

    entityEl.appendChild(imageEl);
    entityEl.appendChild(titleEl);
    entityEl.appendChild(descriptionEl);

    fadeBackgroundEl.appendChild(entityEl);
  },
  createImageEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 0.85,
      height: 0.4,
    });
    entityEl.setAttribute("material", { src: item.banner_url });
    entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
    return entityEl;
  },
  createTitleEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 1.2,
      height: 2,
      color: "#fff",
      value: `${item.title} (${item.cuisine_type})`,
    });
    entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
    return entityEl;
  },
  createDescriptionEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 0.75,
      height: 2,
      color: "#fff",
      wrapCount: "40",
      value: item.description,
    });
    entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
    return entityEl;
  },
});