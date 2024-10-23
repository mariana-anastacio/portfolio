// Load YouTube API
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let players = {};

// This function name is required by YouTube API
function onYouTubeIframeAPIReady() {
    players.descarrilados = new YT.Player('descarriladosVideo', {
        videoId: 'SYQNbGsH-PI',
        playerVars: {
            'rel': 0,
            'autoplay': 0,
            'showinfo': 0
        },
        events: {
            'onStateChange': (event) => handlePlayerStateChange(event, 'videoCover')
        }
    });
    
    players.trailer = new YT.Player('trailerVideo', {
        videoId: '_IeHtIjFh7E',
        playerVars: {
            'rel': 0,
            'autoplay': 0,
            'showinfo': 0
        },
        events: {
            'onStateChange': (event) => handlePlayerStateChange(event, 'trailerCover')
        }
    });

    // Set up scroll detection for both videos
    setupScrollDetection();
}

function setupScrollDetection() {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const container = entry.target;
            const videoId = container.querySelector('iframe').id;
            const coverId = videoId === 'descarriladosVideo' ? 'videoCover' : 'trailerCover';
            const cover = document.getElementById(coverId);
            const player = players[videoId === 'descarriladosVideo' ? 'descarrilados' : 'trailer'];

            if (!entry.isIntersecting && player && typeof player.getPlayerState === 'function') {
                if (player.getPlayerState() === 1) { // If video is playing
                    player.pauseVideo();
                    cover.style.display = 'block';
                }
            }
        });
    }, options);

    // Observe both video containers
    document.querySelectorAll('.video-container').forEach(container => {
        observer.observe(container);
    });
}

function handlePlayerStateChange(event, coverId) {
    // If video ends, show cover
    if (event.data === YT.PlayerState.ENDED) {
        document.getElementById(coverId).style.display = 'block';
    }
}

// Function to setup video player
function setupVideoPlayer(coverId, playerId) {
    const videoCover = document.getElementById(coverId);
    
    videoCover.addEventListener('click', () => {
        videoCover.style.display = 'none';
        if (playerId === 'descarriladosVideo') {
            players.descarrilados.playVideo();
        } else {
            players.trailer.playVideo();
        }
    });
}

// Call setup after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupVideoPlayer('videoCover', 'descarriladosVideo');
    setupVideoPlayer('trailerCover', 'trailerVideo');
});