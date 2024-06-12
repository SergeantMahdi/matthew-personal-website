
document.querySelectorAll('img').forEach(image => {
    image.addEventListener("contextmenu", (e) => {
        e.preventDefault();
    })
}
)