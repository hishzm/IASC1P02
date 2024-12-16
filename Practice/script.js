document.getElementById("book-btn").addEventListener("click", function() {
    alert("Booking feature coming soon!");
});
// Scroll reveal for Services Section
document.addEventListener("scroll", function () {
    const servicesSection = document.getElementById("services");
    const sectionPosition = servicesSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionPosition < windowHeight - 100) {
        servicesSection.classList.add("visible");
    }
});

// Pricing Button Interaction
document.getElementById("pricing-btn").addEventListener("click", function () {
    alert("Pricing details coming soon!");
});
