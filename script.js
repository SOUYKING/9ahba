let clickCount = 0;
document.getElementById('toggleButton').addEventListener('click', function() {
    var images = document.getElementsByClassName('prankImage');
    var sound = document.getElementById('prankSound');

    // Hide all images
    for (var i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }

    // Show a random image
    var randomIndex = Math.floor(Math.random() * images.length);
    images[randomIndex].style.display = 'block';

    // Play sound with a delay
    setTimeout(function() {
        sound.play();
    }, 500);

    // Increment click count
    clickCount++;
    if (clickCount >= 5) {
        window.location.href = 'https://xnxx.com/'; // Replace with the desired URL
    }

    // Change button text and style
    this.innerText = clickCount % 2 === 0 ? 'Click Again' : 'Keep Clicking';
    this.style.backgroundColor = clickCount % 2 === 0 ? '#e68a00' : '#ff9900';
});
