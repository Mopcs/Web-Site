document.getElementById("open-modal-btn2").addEventListener("click", function() {
    document.getElementById("my-modal").classList.add("open")
})


document.getElementById("open-modal2-btn").addEventListener("click", function() {
    document.getElementById("my-modal2").classList.add("open")
})

document.getElementById("close-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.remove("open")
})
document.getElementById("close-modal-btn2").addEventListener("click", function() {
    document.getElementById("my-modal2").classList.remove("open")
})
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal").classList.remove("open")
    }
});
document.querySelector("#my-modal .modal-box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});
document.querySelector("#my-modal2 .modal-box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modal2").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});
