const btn = document.querySelectorAll(".btn");

const closeBtn = document.querySelector(".close");

const popup = document.querySelector(".popup");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    popup.innerHTML = `<h2>${btn[i].getAttribute("pop-msg")}<h2>`;
    popup.classList.remove("hide");
    closeBtn.classList.remove("hide");
  });
}

closeBtn.addEventListener("click", () => {
  popup.classList.add("hide");
  closeBtn.classList.add("hide");
});
