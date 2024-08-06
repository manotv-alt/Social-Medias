const container = document.getElementById('cont');
const darkBtn = document.getElementById('dark-button');
const lightBtn = document.getElementById('light-button');

darkBtn.addEventListener('click', () => {
    container.classList.add("active");
});

lightBtn.addEventListener('click', () => {
    container.classList.remove("active");
});