const exitIcon = () => {
  const iconContainer = document.createElement("div");
  iconContainer.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="slideshow-control-icon">
  <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
  </svg>`;
  return iconContainer;
};

export default exitIcon;
