const fonts = ['Orbitron', 'Georgia', 'Courier New', 'Arial',
    'Times New Roman', 'Impact', 'Trebuchet MS', 'Palatino',
    'Garamond', 'Verdana', 'Comic Sans MS'];

document.querySelectorAll('h2 span').forEach((span, i) => {
    span.style.fontFamily = fonts[i];
});