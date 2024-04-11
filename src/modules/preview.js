import displayService from "../services/displayService";
import dataService from "../services/dataService";

let chosenImages = [];

const createImagesContainer = (images) => {
  const imagesPreview = document.createElement("div");
  imagesPreview.classList.add("preview");

  images.forEach((image) => {
    const imgContainer = document.createElement("button");
    imgContainer.classList.add("preview-image-container");

    if (image.isChosen) {
      imgContainer.classList.add("active");
    }

    const img = document.createElement("img");
    img.src = image.url;
    img.classList.add("preview-image");

    img.addEventListener("click", () => {
      const chosenImagesHeader = document.querySelector(
        ".chosen-images-header"
      );
      console.log("Choose an image");
      image.isChosen = !image.isChosen;
      console.log(image);
      imgContainer.classList.toggle("active");
      chosenImages = [...dataService.getChosenImages(images)];
      chosenImagesHeader.textContent = `${chosenImages.length} of ${images.length} Images chosen`;
    });

    imgContainer.appendChild(img);
    imagesPreview.appendChild(imgContainer);
  });

  return imagesPreview;
};

const createStartSlideShowButton = () => {
  const startSlideshowButton = document.createElement("button");
  startSlideshowButton.classList.add("start-slideshow-button");
  startSlideshowButton.textContent = "Start Slideshow";

  startSlideshowButton.addEventListener("click", () => {
    console.log("Start Slideshow");
    displayService.showSlideShow(chosenImages);
  });

  return startSlideshowButton;
};

const preview = (images) => {
  const previewContainer = document.createElement("div");
  previewContainer.classList.add("preview-container");

  const preview = createImagesContainer(images);

  const imagesChosenHeader = document.createElement("h2");
  imagesChosenHeader.classList.add("chosen-images-header");
  imagesChosenHeader.textContent = `${chosenImages.length} of ${images.length} Images chosen`;

  const startSlideShowButton = createStartSlideShowButton();

  previewContainer.appendChild(preview);
  previewContainer.appendChild(imagesChosenHeader);
  previewContainer.appendChild(startSlideShowButton);

  return previewContainer;
};

const addPreview = (parentElement, images) => {
  chosenImages = [...dataService.getChosenImages(images)];
  parentElement.appendChild(preview(images));
};

export default addPreview;
