import { v4 as uuid } from "uuid";

const handleDrop = async (e, images) => {
  e.preventDefault();

  for (const item of e.dataTransfer.items) {
    const dataTransferItem = item.webkitGetAsEntry();
    traverseFileTree(dataTransferItem, images);
  }
  // Give some time for the recursive traverseFileTree-function to finish, make better solution later
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 500);
  });
};

const traverseFileTree = (item, images) => {
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
        traverseFileTree(entries[i], images);
      }
    });
  }
};

export default { handleDrop };
