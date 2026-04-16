const fonts = ['Orbitron', 'Georgia', 'Courier New', 'Arial',
    'Times New Roman', 'Impact', 'Trebuchet MS', 'Palatino',
    'Garamond', 'Verdana', 'Comic Sans MS'];

document.querySelectorAll('h2 span').forEach((span, i) => {
    span.style.fontFamily = fonts[i];
});


function goTo(page) {
    document.querySelectorAll('#main > div').forEach(div => div.style.display = 'none');
    document.getElementById(page + '-page').style.display = 'block';
}

function goBack() {
    document.querySelectorAll('#main > div').forEach(div => div.style.display = 'none');
    document.getElementById('home-page').style.display = 'block';
}