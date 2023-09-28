const input = document.querySelector("input");
console.log(input);
input.addEventListener("keyup", (e) => {
  console.log(e.target.value);
});

// const parentNode = document.querySelectorAll(".parent");
// console.log(parentNode);

// function handleClick(e) {
//   console.log("Button clicked");
// }

// parentNode.forEach((node) => {
//   const heading = node.querySelector("h1");
//   const button = node.querySelector("button");
//   button.addEventListener("click", (e) => {
//     heading.style.color = "red";
//     heading.style.fontStyle = "italic";
//   });
// });

// const styleChangeButton = document.querySelector(".parent > button");

// styleChangeButton.addEventListener("click", (e) => {
//   console.log(e);
//   pageHeadingNode.style.color = "red";
//   pageHeadingNode.style.fontStyle = "italic";
// });
