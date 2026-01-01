<script>
(function(){
  try {
    if ('replaceState' in history) {
      history.replaceState(null, '', location.href);
    }
  } catch(e){}
})();

// Cache control system
(function() {
  // Check for URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const showParam = urlParams.get('per');
  
  // Check for existing cookie
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }
  
  const cacheCookie = getCookie('page_cache_access');
  
  // If no parameter and no valid cookie, redirect or hide content
  if (!showParam && !cacheCookie) {
    // Hide all content
    document.body.style.display = 'none';
    
    // Clear any existing content and show minimal message
    document.body.innerHTML = `
      <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background: #000; color: #fff; font-family: Arial;">
        <div style="text-align: center;">
          <h1>Access Restricted</h1>
          <p>This page requires special access permissions.</p>
        </div>
      </div>
    `;
    
    document.body.style.display = 'block';
    return;
  }
  
  // If parameter is present, set cookie for 1 minute
  if (showParam === 'id') {
    const now = new Date();
    const expiry = new Date(now.getTime() + 1 * 60 * 1000); // 1 minute
    
    document.cookie = `page_cache_access=true; expires=${expiry.toUTCString()}; path=/; SameSite=Strict`;
    
    // Optional: Remove parameter from URL without reloading
    if (window.history.replaceState) {
      const newUrl = window.location.pathname + window.location.hash;
      window.history.replaceState({}, document.title, newUrl);
    }
  }
  
  // If cookie exists but is expired, clear it
  if (cacheCookie) {
    const cookieExpiry = getCookieExpiry('page_cache_access');
    if (cookieExpiry && new Date() > cookieExpiry) {
      document.cookie = 'page_cache_access=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      location.reload();
    }
  }
  
  // Helper function to get cookie expiry
  function getCookieExpiry(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        const cookieParts = cookie.split(';');
        for (let j = 0; j < cookieParts.length; j++) {
          const part = cookieParts[j].trim();
          if (part.startsWith('expires=')) {
            return new Date(part.substring(8));
          }
        }
      }
    }
    return null;
  }
})();

// Rest of your existing code continues...
var video = document.getElementById("videoplayer");
var playButton = document.getElementById("customPlayButton");
var videoSource = document.getElementById("videoSource");
var timeoutID;
var videoSources = ["https://rh.positivetraits.us/wp-content/uploads/2025/21/1.mp4","https://rh.positivetraits.us/wp-content/uploads/2025/21/2.mp4","https://rh.positivetraits.us/wp-content/uploads/2025/21/3.mp4","https://rh.positivetraits.us/wp-content/uploads/2025/21/4.mp4","https://rh.positivetraits.us/wp-content/uploads/2025/21/5.mp4","https://rh.positivetraits.us/wp-content/uploads/2025/21/6.mp4","https://rh.positivetraits.us/wp-content/uploads/2025/21/7.mp4","https://rh.positivetraits.us/wp-content/uploads/2025/21/8.mp4","https://rh.positivetraits.us/wp-content/uploads/2025/21/9.mp4","https://rh.positivetraits.us/wp-content/uploads/2025/21/10.mp4","https://rh.positivetraits.us/wp-content/uploads/2025/21/11.mp4","https://rh.positivetraits.us/wp-content/uploads/2025/21/12.mp4","https://rh.positivetraits.us/wp-content/uploads/2025/21/13.mp4","https://rh.positivetraits.us/wp-content/uploads/2025/21/14.mp4","https://rh.positivetraits.us/wp-content/uploads/2025/21/15.mp4","https://rh.positivetraits.us/wp-content/uploads/2025/21/16.mp4","https://rh.positivetraits.us/wp-content/uploads/2025/21/17.mp4","https://rh.positivetraits.us/wp-content/uploads/2025/21/18.mp4","https://rh.positivetraits.us/wp-content/uploads/2025/21/19.mp4","https://rh.positivetraits.us/wp-content/uploads/2025/21/20.mp4"];

function getRandomVideoSource() {
    var randomIndex = Math.floor(Math.random() * videoSources.length);
    return videoSources[randomIndex];
}

function getRandomTime() {
    return Math.floor(Math.random() * (25000 - 15000 + 1)) + 15000;
}

function autoPause() {
    video.pause();
    playButton.style.display = 'block';
}

video.addEventListener('play', function () {
    if (!timeoutID) {
        var randomTime = getRandomTime();
        timeoutID = setTimeout(autoPause, randomTime);
    }
    playButton.style.display = 'none';
});

playButton.addEventListener('click', function () {
    video.play();
    playButton.style.display = 'none';
});

video.addEventListener('pause', function () {
    if (video.currentTime < video.duration) {
        playButton.style.display = 'block';
    }
});

window.onload = function() {
    var randomVideo = getRandomVideoSource();
    videoSource.src = randomVideo;
    video.load();
};

// Random profile display code
document.addEventListener('DOMContentLoaded', function() {
    const profiles = [
        // ... your profiles array remains unchanged ...
        { randomimage:"https://rh.positivetraits.us/wp-content/uploads/2025/16/1.webp", randomname:"Takara Kairi", randomviews:"957K Views", randomrating:"91%", randomquality:"1080p", randomtime:"11 Min", randomvidku:"21 Videos", randomtitle:"Sam Shock Thoroughly Spoils Slim Beauty Japanese Takara Kairi", randomcomment:"123 Comment", randomlike:"100K", randomsecond:"10:36", randomlogo:"https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/1.png"},
        { randomimage:"https://rh.positivetraits.us/wp-content/uploads/2025/16/2.webp", randomname:"Fumiko Sora", randomviews:"475K Views", randomrating:"92%", randomquality:"1080p", randomtime:"12 Min", randomvidku:"21 Videos", randomtitle:"Sexy Japanese Fumiko Sora is learning some card tricks and getting fucked hard", randomcomment:"123 Comment", randomlike:"151K", randomsecond:"11:59", randomlogo:"https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/2.png"},
        // ... rest of profiles ...
    ];
    
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    shuffleArray(profiles);
    const selectedProfiles = profiles.slice(0, 5);
    
    function displayProfile(profile, index) {
        const imageElement = document.getElementById(`randomimage${index}`);
        if(imageElement) {
            imageElement.src = profile.randomimage;
        }
        if(document.getElementById(`randomname${index}`)) document.getElementById(`randomname${index}`).innerText = profile.randomname;
        if(document.getElementById(`randomrating${index}`)) document.getElementById(`randomrating${index}`).innerText = profile.randomrating;
        if(document.getElementById(`randomsecond${index}`)) document.getElementById(`randomsecond${index}`).innerText = profile.randomsecond;
        if(document.getElementById(`randomvidku${index}`)) document.getElementById(`randomvidku${index}`).innerText = profile.randomvidku;
        if(document.getElementById(`randomtitle${index}`)) document.getElementById(`randomtitle${index}`).innerText = profile.randomtitle;
        if(document.getElementById(`randomlike${index}`)) document.getElementById(`randomlike${index}`).innerText = profile.randomlike;
        if(document.getElementById(`randomviews${index}`)) document.getElementById(`randomviews${index}`).innerText = profile.randomviews;
    }
    
    function displayLogo(profile) {
        const logoElement = document.getElementById('randomlogo');
        if (logoElement) {
            logoElement.src = profile.randomlogo;
        }
    }
    
    selectedProfiles.forEach((profile, index) => {
        displayProfile(profile, index + 1);
    });
    displayLogo(selectedProfiles[0]);
});
</script>
