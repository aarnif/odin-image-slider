const dropZone = () => {
  const dropZoneContainer = document.createElement("div");
  dropZoneContainer.classList.add("drop-zone-container");

  const dropZone = document.createElement("div");
  dropZone.classList.add("drop-zone");
  dropZone.textContent = "Drop files here";

  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("Files are over the drop zone");
  });

  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    console.log("Files have been dropped in the drop zone");
  });

  dropZoneContainer.appendChild(dropZone);

  return dropZoneContainer;
};

const addDropZone = (parentElement) => {
  parentElement.appendChild(dropZone());
};

export default addDropZone;
