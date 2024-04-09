import fileService from "../services/fileService.js";
import displayService from "../services/displayService.js";

const dropZone = (images) => {
  const dropZoneContainer = document.createElement("div");
  dropZoneContainer.classList.add("drop-zone-container");

  const dropZone = document.createElement("div");
  dropZone.classList.add("drop-zone");
  dropZone.textContent = "Drop files here";

  dropZone.addEventListener("dragover", async (e) => {
    e.preventDefault();
    console.log("Files are over the drop zone");
  });

  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    console.log("Files have been dropped in the drop zone");
    fileService.handleDrop(e, images).then(() => {
      displayService.updatePage(images);
    });
  });

  dropZoneContainer.appendChild(dropZone);

  return dropZoneContainer;
};

const addDropZone = (parentElement, images) => {
  parentElement.appendChild(dropZone(images));
};

export default addDropZone;
