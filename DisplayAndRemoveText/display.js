export const displayAndRemoveText = function (e) {
  const s = document.querySelector("#yes");
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  key.classList.add("playing");

  setTimeout(function () {
    key.classList.remove("playing");
  }, 90);

  const sortingText = {
    clearText() {
      s.innerHTML = "";
    },

    removeText() {
      let remove = s.innerHTML.slice(0, -1);
      s.innerHTML = remove;
    },

    removeLetters() {
      if (e.key.length <= 1) {
        s.innerHTML += e.key;
      } else if (e.key == "Backspace") {
        sortingText.removeText();
      } else if (e.key == "Enter") {
        sortingText.clearText();
      }
    },
  };
  sortingText.removeLetters();
};
