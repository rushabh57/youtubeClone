const tabBox = document.querySelector(".Tabs-container"),
  arrowicon = document.querySelectorAll(".icon-CHips span");

arrowicon.forEach((icon) => {
  icon.addEventListener("click", () => {
    // console.log(icon.id);
    tabBox.scrollLeft += icon.id === "left" ? -350 : 300;
  });
});
let isdragging = false;

const dragging = (e) => {
  if (!isdragging) return;

  console.log("dragging..");
  tabBox.scrollLeft -= e.movementX;
};
const dragStop = () => {
  let isdragging = false;
};

tabBox.addEventListener("mousedown", () => (isdragging = true));
tabBox.addEventListener("mousemove", dragging);
document.addEventListener("mousemove", dragStop);
