const categories = [
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Momos.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667630/PC_Creative%20refresh/Desserts_2.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Sandwich.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Samosas.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Pastry.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667626/PC_Creative%20refresh/South_Indian_4.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Salad.png",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Pakodas.png",
];

const offers = [
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/a879b95a1e54915c07037f2a2af90ed2",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/4588eea459c19a835bac4f75e44267b5",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/8838dcd5481a6cfc45567c900c7c0f26",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/90b990bd1dc16bba234f5002627f71d3",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/930446fda5aed5c1ceac0f058971f851",
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/3180d5bd4606cac4ee158eead46b0540",
];

const restaurants = [
  {
    name: "Blue Nile",
    ratings: 4.5,
    area: "Camp Area",
    cuisine: ["Indian", "Chinese"],
    offerAvailable: "$125 OFF ABOVE $122",
    images: [
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/usj6ahnbc4lvrmxlzuee",
    ],
  },
  {
    name: "MCDonald's",
    ratings: 4,
    area: "Camp Area",
    cuisine: ["Burger", "Beverages", "Cafe", "Dessert"],
    images: [
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee5f8e06b300efc07c9fe3f4df40dfc4",
    ],
  },
];

const foods = [
  {
    name: "Tomato Soup",
    price: "80",
    description: "Servers 1 | Delicious & Authentic Taste ",
  },
  {
    name: "Corn Soup",
    price: "80",
    description: "Servers 1 | Delicious & Authentic Taste",
  },
  {
    name: "Mushroom Soup",
    price: "80",
    description: "Servers 1 | Delicious & Authentic Taste",
  },
];

function createRestaurantCard(data = {}) {
  return `
          <div class="restaurant-card">
            <div class="card-header mb-2">
              <img
                class="image"
                src=${data.images[0]}
                alt="restaurant-image"
              />
              <div class="overlay">
                <div class="content"></div>
                <div class="content"></div>
                  ${
                    data.offerAvailable &&
                    `
                      <h6 style="color: #ffffff">${data.offerAvailable}</h6>
                    `
                  }
              </div>
            </div>
            <div class="card-body">
              <h5 class="restaurant-title">${data.name}</h5>
              <span class="d-flex align-items-center ratings"
                ><img
                  class="ratings-icon me-2"
                  src="https://icons-for-free.com/iconfiles/png/512/green+star+icon-1320183463950302962.png"
                />${data.ratings}</span
              >
              <p class="cuisine">${data.cuisine.join(", ")}e</p>
              <p class="restaurant-area">${data.area}</p>
            </div>
          </div>
            `;
}

function createFoodCard(data = {}) {
  return `
          <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div class="card food-card">
                <div class="card-body d-flex food-card-body">
                  <div class="content-section">
                    <h6 class="title">${data.name}</h6>
                    <p class="pricing">${data.price} Rs</p>
                    <p class="details">
                      ${data.description}
                    </p>
                  </div>
                  <div class="image-section">
                    <img
                      class="food-image rounded mb-2"
                      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/rqwiwppdmaxg4qsmgzwq"
                    />
                    <button type="submit" class="btn">ADD</button>
                  </div>
                </div>
              </div>
            </div>
            `;
}

function createBanner(data = "", className = "") {
  const node = document.createElement("div");
  node.className = className;
  node.setAttribute("style", `background-image: url(${data})`);
  return node;
}

function renderOffersAndCategories(data = [], target = "", cardType = "") {
  const categoriesContainer = document.getElementById(target);
  if (data && data.length > 0) {
    data.forEach((d) =>
      categoriesContainer.appendChild(createBanner(d, cardType))
    );
  }
}

function renderCards(data = [], target = "", cardGenerator = (data) => {}) {
  const container = document.getElementById(target);
  let html = "";
  if (data && data.length > 0) {
    data.forEach((d) => {
      html += cardGenerator(d);
    });
    container.innerHTML = html;
  }
}

renderOffersAndCategories(offers, "offers-slider", "offer-banner");
renderOffersAndCategories(categories, "categories-slider", "category-banner");
renderCards(restaurants, "restaurants-slider", createRestaurantCard);
renderCards(foods, "food-menu-container", createFoodCard);
