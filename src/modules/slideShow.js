import exitIcon from "../assets/images/exit.svg";
import playIcon from "../assets/images/play.svg";
import pauseIcon from "../assets/images/pause.svg";
import previousIcon from "../assets/images/previous.svg";
import nextIcon from "../assets/images/next.svg";
import displayService from "../services/displayService";
import dataService from "../services/dataService";

let index = 0;
let isSlideShowRunning = false;
let startSlideShowInterval = null;
let allImages = [];
let chosenImages = [];
let timeout = null;

const startSlideShow = (slideShowImage) => {
  console.log("startSlideShow");
  isSlideShowRunning = true;
  startSlideShowInterval = setInterval(() => {
    index = handleNext(index);
    slideShowImage.src = chosenImages[index].url;
    console.log(index);
  }, 2000);
};

const stopSlideShow = () => {
  isSlideShowRunning = false;
  console.log("stopSlideShow");
  clearInterval(startSlideShowInterval);
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

  const slideShowExitIcon = document.createElement("img");
  slideShowExitIcon.classList.add("slideshow-control-icon");

  slideShowExitIcon.src = exitIcon;

  slideShowExitIcon.addEventListener("click", () => {
    console.log("Exit button clicked");
    stopSlideShow();
    displayService.showPreview(allImages);
  });

  slideShowExitButton.appendChild(slideShowExitIcon);

  return slideShowExitButton;
};

const createPlayOrPauseButton = (slideShowImage) => {
  const playOrPauseButton = document.createElement("button");
  playOrPauseButton.classList.add("slideshow-control-button");

  const playOrPauseIcon = document.createElement("img");
  playOrPauseIcon.classList.add("slideshow-control-icon");
  playOrPauseIcon.src = pauseIcon;

  playOrPauseIcon.addEventListener("click", () => {
    console.log("Play/pause button clicked");
    isSlideShowRunning ? stopSlideShow() : startSlideShow(slideShowImage);
    playOrPauseIcon.src = isSlideShowRunning ? pauseIcon : playIcon;
  });

  playOrPauseButton.appendChild(playOrPauseIcon);

  return playOrPauseButton;
};

const createPreviousButton = (slideShowImage) => {
  const previousButton = document.createElement("button");
  previousButton.classList.add("slideshow-control-button");

  const previousIconElement = document.createElement("img");
  previousIconElement.classList.add("slideshow-control-icon");
  previousIconElement.src = previousIcon;

  previousIconElement.addEventListener("click", () => {
    console.log("Previous button clicked");
    index = handlePrevious(index, images);
    slideShowImage.src = images[index].url;
  });

  previousButton.appendChild(previousIconElement);

  return previousButton;
};

const createNextButton = (slideShowImage) => {
  const nextButton = document.createElement("button");
  nextButton.classList.add("slideshow-control-button");

  const nextIconElement = document.createElement("img");
  nextIconElement.classList.add("slideshow-control-icon");
  nextIconElement.src = nextIcon;

  nextIconElement.addEventListener("click", () => {
    console.log("Next button clicked");
    index = handleNext(index);
    slideShowImage.src = chosenImages[index].url;
  });

  nextButton.appendChild(nextIconElement);

  return nextButton;
};

const slideShowButtons = (slideShowImage) => {
  const slideShowButtonsContainer = document.createElement("div");
  slideShowButtonsContainer.classList.add("slide-show-buttons-container");

  const exitButton = slideShowExitButton();
  const playOrPauseButton = createPlayOrPauseButton(slideShowImage);
  const previousButton = createPreviousButton(slideShowImage);
  const nextButton = createNextButton(slideShowImage);

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

const slideshowThumbnail = (slideShowImage, thumbnailIndex) => {
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
    slideShowImage.src = chosenImages[thumbnailIndex].url;
  });

  thumbnailItem.appendChild(thumbnailItemButton);

  return thumbnailItem;
};

const slideshowThumbnails = (slideShowImage) => {
  const thumbnailsContainer = document.createElement("div");
  thumbnailsContainer.classList.add("slideshow-thumbnails-container");

  const thumbNailItems = document.createElement("ul");
  thumbNailItems.classList.add("slideshow-thumbnail-items");

  chosenImages.forEach((choseImage, thumbnailIndex) => {
    const thumbnail = slideshowThumbnail(slideShowImage, thumbnailIndex);
    thumbNailItems.appendChild(thumbnail);
  });

  thumbnailsContainer.appendChild(thumbNailItems);

  return thumbnailsContainer;
};

const createSlideShow = () => {
  const slideShowContainer = document.createElement("div");
  slideShowContainer.classList.add("slide-show-container");
  const slideShow = document.createElement("div");
  slideShow.classList.add("slide-show");

  const slideShowImage = document.createElement("img");
  slideShowImage.src = chosenImages[index].url;
  slideShowImage.classList.add("slide-show-image");

  slideShow.appendChild(slideShowImage);

  slideShowContainer.appendChild(slideShow);

  const slideShowButtonsContainer = slideShowButtons(slideShowImage);
  slideShowContainer.appendChild(slideShowButtonsContainer);

  const thumbnailImageContainer = thumbnailImage();
  slideShowContainer.appendChild(thumbnailImageContainer);

  const thumbnailsContainer = slideshowThumbnails(slideShowImage);
  slideShowContainer.appendChild(thumbnailsContainer);

  startSlideShow(slideShowImage);

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
};

export default addSlideShow;
