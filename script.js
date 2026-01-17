const card = document.querySelector(".card");
const buttons = document.querySelectorAll(".toggle-button button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        card.classList.toggle("show-back");
    });
});
