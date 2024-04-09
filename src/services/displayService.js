import addDropZone from "../modules/dropZone";

const wrapper = document.getElementById("wrapper");

const loadPage = () => {
  addDropZone(wrapper);
};

export default { loadPage };
