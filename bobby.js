const bobbyImage = document.querySelector('.bobby-image');
const bobbyVideo = document.querySelector('.bobby-video');
const bobbyContainer = document.querySelector('.bobby');

// Hover effect for Benji
bobbyContainer.addEventListener('mouseenter', () => {
    bobbyVideo.classList.add('show'); // Show the video
    bobbyVideo.currentTime = 0;
    bobbyVideo.play();

    setTimeout(() => {
        bobbyImage.style.visibility = 'hidden'; // Hide the image after showing the video
    }, 100);
});

bobbyContainer.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (document.querySelector(':hover') !== bobbyContainer) {
            bobbyImage.style.visibility = 'visible'; // Show the image
            bobbyVideo.pause(); // Pause the video
            bobbyVideo.classList.remove('show'); // Hide the video
        }
    }, 100);
});

// Click event to navigate to Benji page (fixing the wrong reference here)
bobbyVideo.addEventListener('click', () => {
    window.location.href = 'bobby.html';
});

