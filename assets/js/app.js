let buttonToTop = document.getElementById("btnTop")

buttonToTop.addEventListener("click", () => {
    window.scrollTo({top: 0})
})

window.addEventListener("scroll", () => {
    if(window.scrollY >= 200) {
        buttonToTop.classList.remove("d-none")
    } else {
        buttonToTop.classList.add("d-none")

    }
})