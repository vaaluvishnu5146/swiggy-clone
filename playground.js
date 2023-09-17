function renderHeading(id = "", title = "") {
  var heading = document.getElementById(id);
  heading.innerText = title;
}

function createObject(styles = "", id = "") {
  var object = document.createElement("div");
  object.setAttribute("style", styles);
  object.setAttribute("id", id);
  return object;
}

renderHeading("heading", "Magic haan!!");
renderHeading("subtitle", "Its magic text here");

const collections = document.getElementById("collections");
const squares = [
  createObject("width: 100%; height: 200px; background: lightblue;", "square1"),
  createObject("width: 100%; height: 200px; background: red;", "square2"),
];

collections.append(...squares);

collections.appendChild(
  createObject(
    "width: 100%; height: 200px; background: lightyellow;",
    "square3"
  )
);
