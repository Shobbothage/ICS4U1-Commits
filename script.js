const body = document.body;
const btnAmethyst = document.getElementById('btnPurple');
const btnForest = document.getElementById('btnForest');
const btnNormal = document.getElementById('btnNormal');

btnAmethyst.addEventListener('click', () => {
    body.className = 'themePurple';
});

btnForest.addEventListener('click', () => {
    body.className = 'themeForest';
});

btnNormal.addEventListener('click', () => {
    body.className = 'themeNormal';
});