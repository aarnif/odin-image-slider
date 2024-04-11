const previousIcon = () => {
  const iconContainer = document.createElement("div");
  iconContainer.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="slideshow-control-icon">
  <path d="M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z" />
  </svg>`;
  return iconContainer;
};

export default previousIcon;
