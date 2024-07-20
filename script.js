document.getElementById('toggleButton').addEventListener('click', function() {
    var img = document.getElementById('prankImage');
    if (img.style.display === 'none' || img.style.display === '') {
        img.style.display = 'block';
    } else {
        img.style.display = 'none';
    }
});
