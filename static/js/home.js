import "../style/style.css";
import { greet } from "./utils.js";
import { setContent, common1ForHomePage } from "./common.js";

const homeContent = greet("Home Page");
setContent("home-content", homeContent);
console.log("console from home");

common1ForHomePage();
