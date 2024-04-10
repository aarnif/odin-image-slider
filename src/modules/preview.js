import displayService from "../services/displayService";
import dataService from "../services/dataService";

const preview = (images) => {
  const previewContainer = document.createElement("div");
  previewContainer.classList.add("preview-container");

  const preview = document.createElement("div");
  preview.classList.add("preview");

  console.log(images);
  console.log(images.length);

  images.forEach((image) => {
    const imgContainer = document.createElement("button");
    imgContainer.classList.add("preview-image-container");

    if (image.isChosen) {
      imgContainer.classList.add("chosen");
    }

    const img = document.createElement("img");
    img.src = image.url;
    img.classList.add("preview-image");

    img.addEventListener("click", () => {
      console.log("Choose an image");
      image.isChosen = !image.isChosen;
      console.log(image);
      imgContainer.classList.toggle("chosen");
      displayService.updatePage(images);
    });

    imgContainer.appendChild(img);
    preview.appendChild(imgContainer);
  });

  const chosenImages = dataService.getChosenImages(images);

  const imagesChosenHeader = document.createElement("h2");
  imagesChosenHeader.classList.add("chosen-images-header");
  imagesChosenHeader.textContent = `${chosenImages.length} of ${images.length} Images chosen`;

  previewContainer.appendChild(preview);
  previewContainer.appendChild(imagesChosenHeader);

  return previewContainer;
};

const addPreview = (parentElement, images) => {
  parentElement.appendChild(preview(images));
};

export default addPreview;
