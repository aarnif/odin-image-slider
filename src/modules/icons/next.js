const nextIcon = () => {
  const iconContainer = document.createElement("div");
  iconContainer.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="slideshow-control-icon">
  <path d="M16,18H18V6H16M6,18L14.5,12L6,6V18Z" />
  </svg>`;
  return iconContainer;
};

export default nextIcon;
