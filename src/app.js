import images from "./imageData.js";
import displayService from "./services/displayService";

const app = () => {
  displayService.loadPage(images);
};

export default app;
