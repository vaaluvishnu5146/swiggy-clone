const base_url = "http://localhost:5000";

function getAllOffers() {
  fetch(`${base_url}/api/offers`)
    .then((data) => data.json())
    .then((result) => console.log(result));
}
// getAllOffers();

function getAllCategories() {
  fetch(`${base_url}/api/categories`)
    .then((data) => data.json())
    .then((result) => {
      if (result.data && result.data.length > 0) {
        renderCategories(result.data);
      }
    });
}
getAllCategories();

function createBanner(data = "") {
  console.log(data);
  const divNode = document.createElement("div");
  divNode.className = "category-banner";
  divNode.setAttribute("style", `background-image: url(${data})`);
  return divNode;
}

function renderCategories(data = []) {
  const categoriesContainer = document.getElementById("categories-slider");
  const banners = [];
  if (data.length > 0) {
    data.forEach((d) => {
      banners.push(createBanner(d));
    });
  }
  categoriesContainer.append(...banners);
}
