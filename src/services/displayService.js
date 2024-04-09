import addDropZone from "../modules/dropZone";

const content = document.getElementById("content");

const loadPage = () => {
  addDropZone(content);
};

const updatePage = () => {
  content.innerHTML = "";
  content.textContent = "Files have been uploaded";
};

export default { loadPage, updatePage };
