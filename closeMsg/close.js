export const closeMsg = function () {
  let element = document.querySelector("#yess");

  element.addEventListener("click", () => {
    element.classList.add("introduction-block");
  });
};
