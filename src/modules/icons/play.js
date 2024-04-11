const playIcon = () => {
  const iconContainer = document.createElement("div");
  iconContainer.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="slideshow-control-icon">
  <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
  </svg>`;
  return iconContainer;
};

export default playIcon;
