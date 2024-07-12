document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener("blur", () => {
        document.title = "Konser Doa 2024";
    });

    window.addEventListener("focus", () => {
        document.title = "Konser Doa";
    });

    function toggleDropdown(element) {
        const dropdownContainer = element.parentElement;
        dropdownContainer.classList.toggle('active');
    }

    document.querySelectorAll('.dropdown-header').forEach(header => {
        header.addEventListener('click', function() {
            toggleDropdown(this);
        });
    });

    document.getElementById("current-year").textContent = new Date().getFullYear();
    
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    function showSlide(index) {
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }

        const newTransform = -currentIndex * 100 + '%';
        document.querySelector('.carousel-inner').style.transform = `translateX(${newTransform})`;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }


    showSlide(currentIndex);
    setInterval(nextSlide, 5000);
});