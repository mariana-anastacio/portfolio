const overwatchImage = document.querySelector('.overwatch-image');
const overwatchVideo = document.querySelector('.overwatch-video');
const overwatchContainer = document.querySelector('.overwatch');

// Hover effect for Overwatch
overwatchContainer.addEventListener('mouseenter', () => {
    overwatchVideo.classList.add('show'); // Show the video
    overwatchVideo.currentTime = 0;
    overwatchVideo.play();

    setTimeout(() => {
        overwatchImage.style.visibility = 'hidden'; // Hide the image after showing the video
    }, 100);
});

overwatchContainer.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (document.querySelector(':hover') !== overwatchContainer) {
            overwatchImage.style.visibility = 'visible'; // Show the image
            overwatchVideo.pause(); // Pause the video
            overwatchVideo.classList.remove('show'); // Hide the video
        }
    }, 100);
});

// Click event to navigate to Overwatch page
overwatchVideo.addEventListener('click', () => {
    window.location.href = 'overwatch.html';
});
