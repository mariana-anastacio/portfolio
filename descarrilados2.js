function setupVideoPlayer(coverId, videoId) {
    const videoCover = document.getElementById(coverId);
    const video = document.getElementById(videoId);

    videoCover.addEventListener('click', () => {
        videoCover.style.display = 'none'; // Hide the cover image
        video.style.display = 'block'; // Show the video
        video.play(); // Start playing the video
    });

    // When the video ends, show the cover image again
    video.addEventListener('ended', () => {
        videoCover.style.display = 'block'; // Show the cover image again
        video.style.display = 'none'; // Hide the video
    });

    // Prevent cover image from reappearing when manually pausing or interacting with the video
    video.addEventListener('pause', (event) => {
        if (video.currentTime === video.duration) {
            videoCover.style.display = 'block'; // Show the cover image again only when video ends
            video.style.display = 'none'; // Hide the video
        }
    });

    // Use IntersectionObserver to detect when the video goes out of view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                // If video is out of view, stop the video and show the cover
                videoCover.style.display = 'block'; // Show the cover image
                video.style.display = 'none'; // Hide the video
                video.pause(); // Pause the video
                video.currentTime = 0; // Reset video to the start
            }
        });
    });

    // Observe the video element
    observer.observe(video);
}

// Setup for the first video
setupVideoPlayer('videoCover', 'descarriladosVideo');

// Setup for the second video
setupVideoPlayer('trailerCover', 'trailerVideo');
