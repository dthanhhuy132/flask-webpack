export function setContent(elementId, content) {
  const element = document.getElementById(elementId);
  if (element) {
    element.textContent = content;
  }
}

export const common1ForHomePage = () => {
  console.log("common1 for home page");
};

export const common1ForAboutPage = () => {
  console.log("common1 for about page");
};
