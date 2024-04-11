import exitIcon from "./icons/exit.js";
import playIcon from "./icons/play.js";
import pauseIcon from "./icons/pause.js";
import previousIcon from "./icons/previous.js";
import nextIcon from "./icons/next.js";
import displayService from "../services/displayService";
import dataService from "../services/dataService";

let index = 0;
let isSlideShowRunning = true;
let startSlideShowInterval = null;
let allImages = [];
let chosenImages = [];
let timeout = null;
const slideShowDuration = 5000;

const startSlideShow = () => {
  console.log("startSlideShow");
  isSlideShowRunning = true;
  startSlideShowInterval = setInterval(() => {
    index = handleNext(index);
    updateSlideShowImage();
  }, slideShowDuration);
};

const stopSlideShow = () => {
  isSlideShowRunning = false;
  console.log("stopSlideShow");
  clearInterval(startSlideShowInterval);
  const slideShowImageTwo = document.querySelector(".slide-show-image-two");
  slideShowImageTwo.classList.remove("animate");
};

const handleNext = (index) => {
  console.log("handleNext");
  return index === chosenImages.length - 1 ? 0 : index + 1;
};

const handlePrevious = (index) => {
  console.log("handlePrevious");
  return index === 0 ? chosenImages.length - 1 : index - 1;
};

const slideShowExitButton = () => {
  const slideShowExitButton = document.createElement("button");
  slideShowExitButton.classList.add("slideshow-exit-button");

  const slideShowExitIcon = exitIcon();

  slideShowExitButton.addEventListener("click", () => {
    console.log("Exit button clicked");
    stopSlideShow();
    displayService.showPreview(allImages);
  });

  slideShowExitButton.appendChild(slideShowExitIcon);

  return slideShowExitButton;
};

const createPlayOrPauseButton = () => {
  const playOrPauseButton = document.createElement("button");
  playOrPauseButton.classList.add("slideshow-control-button");

  const playOrPauseIcon = isSlideShowRunning ? pauseIcon() : playIcon();

  playOrPauseButton.addEventListener("click", () => {
    console.log("Play/pause button clicked");
    isSlideShowRunning ? stopSlideShow() : startSlideShow();
    playOrPauseButton.innerHTML = "";
    playOrPauseButton.appendChild(
      isSlideShowRunning ? pauseIcon() : playIcon()
    );
  });

  playOrPauseButton.appendChild(playOrPauseIcon);

  return playOrPauseButton;
};

const createPreviousButton = () => {
  const previousButton = document.createElement("button");
  previousButton.classList.add("slideshow-control-button");

  const previousIconElement = previousIcon();

  previousButton.addEventListener("click", () => {
    console.log("Previous button clicked");
    index = handlePrevious(index);
    updateSlideShowImage();
  });

  previousButton.appendChild(previousIconElement);

  return previousButton;
};

const createNextButton = () => {
  const nextButton = document.createElement("button");
  nextButton.classList.add("slideshow-control-button");

  const nextIconElement = nextIcon();

  nextButton.addEventListener("click", () => {
    console.log("Next button clicked");
    index = handleNext(index);
    updateSlideShowImage();
  });

  nextButton.appendChild(nextIconElement);

  return nextButton;
};

const slideShowButtons = () => {
  const slideShowButtonsContainer = document.createElement("div");
  slideShowButtonsContainer.classList.add("slide-show-buttons-container");

  const exitButton = slideShowExitButton();
  const playOrPauseButton = createPlayOrPauseButton();
  const previousButton = createPreviousButton();
  const nextButton = createNextButton();

  slideShowButtonsContainer.appendChild(exitButton);
  slideShowButtonsContainer.appendChild(previousButton);
  slideShowButtonsContainer.appendChild(playOrPauseButton);
  slideShowButtonsContainer.appendChild(nextButton);

  return slideShowButtonsContainer;
};

const thumbnailImage = () => {
  const thunbnailImageContainer = document.createElement("div");
  thunbnailImageContainer.id = "thumbnail-image-container";
  thunbnailImageContainer.classList.add("slideshow-thumbnail-image-container");

  const thumbnailImage = document.createElement("img");
  thumbnailImage.id = "thumbnail-image";
  thumbnailImage.classList.add("slideshow-thumbnail-image");
  thumbnailImage.src = "";

  thunbnailImageContainer.appendChild(thumbnailImage);

  return thunbnailImageContainer;
};

const slideshowThumbnail = (thumbnailIndex) => {
  const thumbnailItem = document.createElement("li");
  thumbnailItem.classList.add("slideshow-thumbnail-item");

  const thumbnailItemButton = document.createElement("button");
  thumbnailItemButton.classList.add("slideshow-thumbnail-button");

  thumbnailItemButton.addEventListener("mouseover", () => {
    console.log(`Thumbnail index ${thumbnailIndex} mouseover`);
    const thumbnailImageContainer = document.getElementById(
      "thumbnail-image-container"
    );
    const thumbnailImage = document.getElementById("thumbnail-image");
    thumbnailImage.src = chosenImages[thumbnailIndex].url;
    thumbnailImageContainer.classList.toggle("active");
  });

  thumbnailItemButton.addEventListener("mouseout", () => {
    console.log(`Thumbnail index ${thumbnailIndex} mouseout`);
    const thumbnailImageContainer = document.getElementById(
      "thumbnail-image-container"
    );
    thumbnailImageContainer.classList.toggle("active");
  });

  thumbnailItemButton.addEventListener("click", () => {
    console.log(`Thumbnail index ${thumbnailIndex} clicked`);
    index = thumbnailIndex;
    updateSlideShowImage();
  });

  thumbnailItem.appendChild(thumbnailItemButton);

  return thumbnailItem;
};

const slideshowThumbnails = () => {
  const thumbnailsContainer = document.createElement("div");
  thumbnailsContainer.classList.add("slideshow-thumbnails-container");

  const thumbNailItems = document.createElement("ul");
  thumbNailItems.classList.add("slideshow-thumbnail-items");

  chosenImages.forEach((chosenImage, thumbnailIndex) => {
    const thumbnail = slideshowThumbnail(thumbnailIndex);
    thumbNailItems.appendChild(thumbnail);
  });

  thumbnailsContainer.appendChild(thumbNailItems);

  return thumbnailsContainer;
};

const updateSlideShowImage = () => {
  console.log("slideShowAnimation");
  const slideShowImageContainer = document.querySelector(".slide-show");
  slideShowImageContainer.innerHTML = "";

  const slideShowImageOne = document.createElement("img");
  slideShowImageOne.src = chosenImages[index].url;
  slideShowImageOne.className = "slide-show-image-one";

  const slideShowImageTwo = document.createElement("img");
  slideShowImageTwo.src = chosenImages[handleNext(index)].url;
  slideShowImageTwo.className = "slide-show-image-two animate";

  slideShowImageContainer.appendChild(slideShowImageOne);
  slideShowImageContainer.appendChild(slideShowImageTwo);
};

const createSlideShow = () => {
  const slideShowContainer = document.createElement("div");
  slideShowContainer.classList.add("slide-show-container");

  const slideShow = document.createElement("div");
  slideShow.classList.add("slide-show");
  slideShowContainer.appendChild(slideShow);

  const slideShowButtonsContainer = slideShowButtons();
  slideShowContainer.appendChild(slideShowButtonsContainer);

  const thumbnailImageContainer = thumbnailImage();
  slideShowContainer.appendChild(thumbnailImageContainer);

  const thumbnailsContainer = slideshowThumbnails();
  slideShowContainer.appendChild(thumbnailsContainer);

  startSlideShow();

  return slideShowContainer;
};

const addSlideShow = (parentElement, images) => {
  allImages = [...images];
  chosenImages = [...dataService.getChosenImages(images)];
  parentElement.appendChild(createSlideShow());

  const slideShowContainer = document.querySelector(".slide-show-container");

  slideShowContainer.addEventListener("mousemove", () => {
    console.log("Show slideshow controls");

    const slideShowImage = document.querySelector(".slide-show");
    const slideThumbnailsContainer = document.querySelector(
      ".slideshow-thumbnails-container"
    );
    const slideShowButtonsContainer = document.querySelector(
      ".slide-show-buttons-container"
    );
    slideShowContainer.classList.remove("show");
    slideShowImage.classList.add("show");
    slideThumbnailsContainer.classList.add("show");
    slideShowButtonsContainer.classList.add("show");

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      slideShowContainer.classList.add("show");
      slideShowImage.classList.remove("show");
      slideThumbnailsContainer.classList.remove("show");
      slideShowButtonsContainer.classList.remove("show");
    }, 2000);
  });

  updateSlideShowImage();
};

export default addSlideShow;
