document.addEventListener('DOMContentLoaded', () => {
    const opacitySlider = document.getElementById('opacity');
    const opacityValue = document.getElementById('opacity-value');
    const overlay = document.querySelector('.overlay');

    opacitySlider.addEventListener('input', (e) => {
        const value = e.target.value;
        opacityValue.textContent = value;
        overlay.style.opacity = value / 255;
    });
}); 