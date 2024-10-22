const falseidImage = document.querySelector('.falseid-image');
const falseidVideo = document.querySelector('.falseid-video');
const falseidContainer = document.querySelector('.falseid');

// Hover effect for Falseid
falseidContainer.addEventListener('mouseenter', () => {
    falseidVideo.classList.add('show'); // Show the video
    falseidVideo.currentTime = 0;       // Start the video from the beginning
    falseidVideo.play();                // Play the video

    setTimeout(() => {
        falseidImage.style.visibility = 'hidden'; // Hide the image after showing the video
    }, 100);
});

falseidContainer.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (document.querySelector(':hover') !== falseidContainer) {
            falseidImage.style.visibility = 'visible'; // Show the image when mouse leaves
            falseidVideo.pause();                      // Pause the video
            falseidVideo.classList.remove('show');     // Hide the video
        }
    }, 100);
});

// Click event to navigate to Falseid page
falseidVideo.addEventListener('click', () => {
    window.location.href = 'falseid.html'; // Navigate to the new page on click
});
