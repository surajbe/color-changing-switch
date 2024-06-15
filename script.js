document.getElementById('colorbutton').addEventListener('click', function() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F0FF33', '#FF33D1'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    this.style.backgroundColor = randomColor;
});