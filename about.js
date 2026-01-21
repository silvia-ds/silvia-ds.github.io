function nextSlide(type) {
    const slides = document.querySelectorAll(`.${type}-slide`);
    let index = [...slides].findIndex(s => s.classList.contains("active"));

    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}

function prevSlide(type) {
    const slides = document.querySelectorAll(`.${type}-slide`);
    let index = [...slides].findIndex(s => s.classList.contains("active"));

    slides[index].classList.remove("active");
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add("active");
}
