const benjiImage = document.querySelector('.benji-image');
const benjiVideo = document.querySelector('.benji-video');
const benjiContainer = document.querySelector('.benji');

// Hover effect for Benji
benjiContainer.addEventListener('mouseenter', () => {
    benjiVideo.classList.add('show'); // Show the video
    benjiVideo.currentTime = 0;
    benjiVideo.play();

    setTimeout(() => {
        benjiImage.style.visibility = 'hidden'; // Hide the image after showing the video
    }, 100);
});

benjiContainer.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (document.querySelector(':hover') !== benjiContainer) {
            benjiImage.style.visibility = 'visible'; // Show the image
            benjiVideo.pause(); // Pause the video
            benjiVideo.classList.remove('show'); // Hide the video
        }
    }, 100);
});

// Click event to navigate to Benji page (fixing the wrong reference here)
benjiVideo.addEventListener('click', () => {
    window.location.href = 'benji.html';
});

