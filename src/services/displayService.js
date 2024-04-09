import addDropZone from "../modules/dropZone";
import addPreview from "../modules/preview";

const content = document.getElementById("content");

const loadPage = (images) => {
  addDropZone(content, images);
};

const updatePage = (images) => {
  content.innerHTML = "";
  addPreview(content, images);
};

export default { loadPage, updatePage };
