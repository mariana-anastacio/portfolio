function setupVideoPlayer(coverId, videoId) {
    const videoCover = document.getElementById(coverId);  // The cover image
    const video = document.getElementById(videoId);  // The video element

    // Debugging: Check if the elements exist in the console
    console.log('videoCover:', videoCover);
    console.log('video:', video);

    // When the cover image is clicked
    videoCover.addEventListener('click', () => {
        videoCover.style.display = 'none';  // Hide the cover image
        video.style.display = 'block';  // Show the video
        video.play();  // Start playing the video
    });

    // Optional: When the video is paused or ended, show the cover image again
    video.addEventListener('pause', () => {
        videoCover.style.display = 'block';  // Show the cover image
        video.style.display = 'none';  // Hide the video
    });

    video.addEventListener('ended', () => {
        videoCover.style.display = 'block';  // Show the cover image again
        video.style.display = 'none';  // Hide the video
    });
}

// Initialize Bobby video
setupVideoPlayer('bobbyCover', 'bobbyVideo');


