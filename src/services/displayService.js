import addDropZone from "../modules/dropZone";

const wrapper = document.getElementById("wrapper");

const loadPage = () => {
  addDropZone(wrapper);
};

const updatePage = () => {
  wrapper.innerHTML = "";
  wrapper.textContent = "Files have been uploaded";
};

export default { loadPage, updatePage };
