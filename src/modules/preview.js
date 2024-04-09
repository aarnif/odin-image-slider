const preview = (images) => {
  const previewContainer = document.createElement("div");
  previewContainer.classList.add("preview-container");

  const preview = document.createElement("div");
  preview.classList.add("preview");

  console.log(images);
  console.log(images.length);

  images.forEach((image) => {
    console.log(image);
    const imgContainer = document.createElement("button");
    imgContainer.classList.add("preview-image-container");
    const img = document.createElement("img");
    img.src = image.url;
    img.classList.add("preview-image");
    imgContainer.appendChild(img);
    preview.appendChild(imgContainer);
  });

  previewContainer.appendChild(preview);

  return previewContainer;
};

const addPreview = (parentElement, images) => {
  parentElement.appendChild(preview(images));
};

export default addPreview;
