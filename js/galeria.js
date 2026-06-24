const modal = document.getElementById("imgModal");
const title = document.getElementById("modalTitle");
const desc = document.getElementById("modalDesc");
const modalImg = document.getElementById("modalImg");

const items = document.querySelectorAll(".gallery-item");
const closeBtn = document.querySelector(".close-btn");

// Open modal with image, title and description (fallbacks supported)
items.forEach(item => {
    item.addEventListener("click", () => {
        const t = item.dataset.title || item.dataset.i18nTitle || item.getAttribute('data-i18n-title') || '';
        const d = item.dataset.desc || item.dataset.i18nDesc || item.getAttribute('data-i18n-desc') || '';
        const img = item.querySelector('img');
        const src = img ? img.getAttribute('src') : '';

        title.textContent = t;
        desc.textContent = d;
        modalImg.src = src;
        modalImg.alt = t || '';

        modal.classList.add("active");
    });
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});

// No search/filter on gallery page — overlays handled by CSS hover.