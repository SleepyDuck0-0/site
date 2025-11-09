
// Hover Zoom with Cursor-Focus
document.addEventListener("mousemove", function(e) {
    if (!e.target.closest(".modal-image-wrapper img")) return;

    const img = e.target;
    const rect = img.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    img.style.transformOrigin = `${x}% ${y}%`;
});

// Apply zoom in/out on hover
document.addEventListener("mouseover", function(e) {
    if (e.target.matches(".modal-image-wrapper img")) {
        e.target.style.transform = "scale(1.7)"; // adjust max zoom here
    }
});
document.addEventListener("mouseout", function(e) {
    if (e.target.matches(".modal-image-wrapper img")) {
        e.target.style.transform = "scale(1)";
    }
});