const pauseIcon = () => {
  const iconContainer = document.createElement("div");
  iconContainer.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="slideshow-control-icon">
  <path d="M14,19H18V5H14M6,19H10V5H6V19Z" />
  </svg>`;
  return iconContainer;
};

export default pauseIcon;
