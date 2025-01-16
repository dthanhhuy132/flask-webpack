import "../style/style.css";
import { greet } from "./utils.js";
import { setContent, common1ForAboutPage } from "./common.js";

const aboutContent = greet("About Page");
setContent("about-content", aboutContent);

common1ForAboutPage();
