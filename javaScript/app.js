let burger = document.querySelector(".burger");
let list = document.querySelector(".header__list");
burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    list.classList.toggle("show");
});
