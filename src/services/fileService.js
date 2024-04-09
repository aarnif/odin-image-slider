import { v4 as uuid } from "uuid";

const handleDrop = (e, images) => {
  e.preventDefault();

  const items = e.dataTransfer.items;
  for (let i = 0; i < items.length; i++) {
    const item = items[i].webkitGetAsEntry();
    if (item) {
      traverseFileTree(item, images);
    }
  }
};

const traverseFileTree = (item, images, path = "") => {
  if (item.isFile) {
    item.file((file) => {
      if (file.type.startsWith("image/")) {
        const url = URL.createObjectURL(file);
        images.push({ id: uuid(), url, isChosen: true });
      }
    });
  } else if (item.isDirectory) {
    const dirReader = item.createReader();
    dirReader.readEntries((entries) => {
      for (let i = 0; i < entries.length; i++) {
        traverseFileTree(entries[i], images, path + item.name + "/");
      }
    });
  }
};

export default handleDrop;
