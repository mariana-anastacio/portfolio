const descarriladosImage = document.querySelector('.descarrilados-image');
const descarriladosVideo = document.querySelector('.descarrilados-video');
const descarriladosContainer = document.querySelector('.descarrilados');

// Hover effect for Descarrilados
descarriladosContainer.addEventListener('mouseenter', () => {
    descarriladosVideo.classList.add('show'); // Show the video
    descarriladosVideo.currentTime = 0;
    descarriladosVideo.play();

    setTimeout(() => {
        descarriladosImage.style.visibility = 'hidden'; // Hide the image after showing the video
    }, 100);
});

descarriladosContainer.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (document.querySelector(':hover') !== descarriladosContainer) {
            descarriladosImage.style.visibility = 'visible'; // Show the image
            descarriladosVideo.pause(); // Pause the video
            descarriladosVideo.classList.remove('show'); // Hide the video
        }
    }, 100);
});

// Click event to navigate to Descarrilados page
descarriladosVideo.addEventListener('click', () => {
    window.location.href = 'descarrilados.html';
});
