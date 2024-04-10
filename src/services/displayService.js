import addDropZone from "../modules/dropZone";
import addPreview from "../modules/preview";
import addSlideShow from "../modules/slideShow";

const header = document.querySelector(".header");
const content = document.getElementById("content");
const footer = document.querySelector(".footer");

const loadPage = (images) => {
  addDropZone(content, images);
};

const showPreview = (images) => {
  header.classList.remove("hidden");
  content.innerHTML = "";
  addPreview(content, images);
  footer.classList.remove("hidden");
};

const showSlideShow = (images) => {
  header.classList.add("hidden");
  content.innerHTML = "";
  addSlideShow(content, images);
  footer.classList.add("hidden");
};

export default { loadPage, showPreview, showSlideShow };
