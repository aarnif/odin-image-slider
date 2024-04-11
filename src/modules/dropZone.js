import fileService from "../services/fileService.js";
import displayService from "../services/displayService.js";

const dropZone = (images) => {
  const dropZoneContainer = document.createElement("div");
  dropZoneContainer.classList.add("drop-zone-container");

  const dropZoneWaveOne = document.createElement("div");
  dropZoneWaveOne.classList.add("drop-zone-wave");
  const dropZoneWaveTwo = document.createElement("div");
  dropZoneWaveTwo.classList.add("drop-zone-wave");
  const dropZoneWaveThree = document.createElement("div");
  dropZoneWaveThree.classList.add("drop-zone-wave");
  const dropZoneWaveFour = document.createElement("div");
  dropZoneWaveFour.classList.add("drop-zone-wave");

  const dropZone = document.createElement("div");
  dropZone.classList.add("drop-zone");
  dropZone.textContent = "Drop files here";

  dropZone.addEventListener("dragover", async (e) => {
    e.preventDefault();
    console.log("Files are over the drop zone");
    dropZone.classList.add("active");
    dropZoneWaveOne.classList.add("one");
    dropZoneWaveTwo.classList.add("two");
    dropZoneWaveThree.classList.add("three");
    dropZoneWaveFour.classList.add("four");
  });

  dropZone.addEventListener("dragleave", (e) => {
    e.preventDefault();
    console.log("Files have left the drop zone");
    dropZone.classList.remove("active");
    dropZoneWaveOne.classList.remove("one");
    dropZoneWaveTwo.classList.remove("two");
    dropZoneWaveThree.classList.remove("three");
    dropZoneWaveFour.classList.remove("four");
  });

  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    console.log("Files have been dropped in the drop zone");
    fileService.handleDrop(e, images).then(() => {
      displayService.showPreview(images);
    });
  });

  dropZone.appendChild(dropZoneWaveOne);
  dropZone.appendChild(dropZoneWaveTwo);
  dropZone.appendChild(dropZoneWaveThree);
  dropZone.appendChild(dropZoneWaveFour);

  dropZoneContainer.appendChild(dropZone);

  return dropZoneContainer;
};

const addDropZone = (parentElement, images) => {
  parentElement.appendChild(dropZone(images));
};

export default addDropZone;
