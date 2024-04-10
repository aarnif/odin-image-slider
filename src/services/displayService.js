import addDropZone from "../modules/dropZone";
import addPreview from "../modules/preview";
import addSlideShow from "../modules/slideShow";

const content = document.getElementById("content");

const loadPage = (images) => {
  addDropZone(content, images);
};

const showPreview = (images) => {
  content.innerHTML = "";
  addPreview(content, images);
};

const showSlideShow = (images) => {
  content.innerHTML = "";
  addSlideShow(content, images);
};

export default { loadPage, showPreview, showSlideShow };
