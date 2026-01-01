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
  
  // Debug logging
  console.log('URL Parameter per:', showParam);
  
  // Check for existing cookie
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }
  
  const cacheCookie = getCookie('page_cache_access');
  console.log('Cache Cookie:', cacheCookie);
  
  // If no parameter and no valid cookie, redirect or hide content
  if (!showParam && !cacheCookie) {
    console.log('No access - hiding content');
    // Hide all content
    document.body.style.display = 'none';
    
    // Clear any existing content and show minimal message
    document.body.innerHTML = `
      <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background: #000; color: #fff; font-family: Arial;">
        <div style="text-align: center;">
          <h1>Access Restricted</h1>
          <p>This page requires special access permissions.</p>
          <p style="color: #ec567c; font-size: 14px; margin-top: 20px;">
            Please use the correct access URL
          </p>
        </div>
      </div>
    `;
    
    document.body.style.display = 'block';
    return;
  }
  
  // If parameter is present, set cookie for 1 minute
  if (showParam === 'id') {
    console.log('Parameter found, setting cookie');
    const now = new Date();
    const expiry = new Date(now.getTime() + 1 * 60 * 1000); // 1 minute
    
    // Set cookie with domain and path for wider accessibility
    document.cookie = `page_cache_access=true; expires=${expiry.toUTCString()}; path=/; domain=${window.location.hostname}; SameSite=Lax`;
    
    console.log('Cookie set with expiry:', expiry.toUTCString());
    
    // Optional: Remove parameter from URL without reloading
    if (window.history.replaceState) {
      const newUrl = window.location.pathname;
      console.log('Cleaning URL from', window.location.href, 'to', newUrl);
      window.history.replaceState({}, document.title, newUrl);
    }
  }
  
  // If cookie exists, check if it's still valid
  if (cacheCookie) {
    console.log('Cookie exists, checking validity');
    
    // Simple check - if cookie exists, grant access for this session
    // The cookie will expire automatically based on browser's expiry time
    
    // For extra safety, you can check expiry time from cookie string
    const cookieString = document.cookie;
    const cookieMatch = cookieString.match(/page_cache_access=true(?:; expires=([^;]+))?/);
    
    if (cookieMatch && cookieMatch[1]) {
      const expiryTime = new Date(cookieMatch[1]);
      const now = new Date();
      
      console.log('Cookie expiry:', expiryTime);
      console.log('Current time:', now);
      
      if (now > expiryTime) {
        console.log('Cookie expired, clearing it');
        document.cookie = 'page_cache_access=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + window.location.hostname + ';';
        location.reload();
      }
    }
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
        { randomimage:"https://rh.positivetraits.us/wp-content/uploads/2025/16/1.webp", randomname:"Takara Kairi", randomviews:"957K Views", randomrating:"91%", randomquality:"1080p", randomtime:"11 Min", randomvidku:"21 Videos", randomtitle:"Sam Shock Thoroughly Spoils Slim Beauty Japanese Takara Kairi", randomcomment:"123 Comment", randomlike:"100K", randomsecond:"10:36", randomlogo:"https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/1.png"},
        { randomimage:"https://rh.positivetraits.us/wp-content/uploads/2025/16/2.webp", randomname:"Fumiko Sora", randomviews:"475K Views", randomrating:"92%", randomquality:"1080p", randomtime:"12 Min", randomvidku:"21 Videos", randomtitle:"Sexy Japanese Fumiko Sora is learning some card tricks and getting fucked hard", randomcomment:"123 Comment", randomlike:"151K", randomsecond:"11:59", randomlogo:"https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/2.png"},
        { randomimage:"https://rh.positivetraits.us/wp-content/uploads/2025/16/3.webp", randomname:"Harumi Aina", randomviews:"198K Views", randomrating:"93%", randomquality:"1080p", randomtime:"13 Min", randomvidku:"23 Videos", randomtitle:"Asian celebrity Harumi Aina having passionate sex in hot scene with her partner", randomcomment:"123 Comment", randomlike:"123K", randomsecond:"12:54", randomlogo:"https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/3.png"},
        { randomimage:"https://rh.positivetraits.us/wp-content/uploads/2025/16/4.webp", randomname:"Akari Nara", randomviews:"946K Views", randomrating:"94%", randomquality:"1080p", randomtime:"14 Min", randomvidku:"24 Videos", randomtitle:"Akari Nara is an Asian nympho who craves anal creampie", randomcomment:"123 Comment", randomlike:"155K", randomsecond:"13:12", randomlogo:"https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/4.png"},
        { randomimage:"https://rh.positivetraits.us/wp-content/uploads/2025/16/5.webp", randomname:"Hana Makaira", randomviews:"912K Views", randomrating:"95%", randomquality:"1080p", randomtime:"15 Min", randomvidku:"25 Videos", randomtitle:"Sexy Japanese Teen Hana Makaira learning some card tricks and getting fucked hard", randomcomment:"123 Comment", randomlike:"165K", randomsecond:"14:21", randomlogo:"https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/5.png"},
        { randomimage:"https://rh.positivetraits.us/wp-content/uploads/2025/16/6.webp", randomname:"Keiko Kana", randomviews:"875K Views", randomrating:"96%", randomquality:"1080p", randomtime:"16 Min", randomvidku:"26 Videos", randomtitle:"Raven haired Vicki Chase is sucking and riding Dan Damage's cock", randomcomment:"146K Comment", randomlike:"171K", randomsecond:"15:18", randomlogo:"https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/6.png"},
        { randomimage:"https://rh.positivetraits.us/wp-content/uploads/2025/16/7.webp", randomname:"Reina Akiara", randomviews:"890K Views", randomrating:"97%", randomquality:"1080p", randomtime:"17 Min", randomvidku:"27 Videos", randomtitle:"Japan beauty Reina Akiar is riding big black cock Isiah Maxwell", randomcomment:"123 Comment", randomlike:"181K", randomsecond:"16:29", randomlogo:"https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/7.png"},
        { randomimage:"https://rh.positivetraits.us/wp-content/uploads/2025/16/8.webp", randomname:"Sada Aika", randomviews:"936K Views", randomrating:"98%", randomquality:"1080p", randomtime:"18 Min", randomvidku:"28 Videos", randomtitle:"JAPANESE teen Sada Aika is having much fun with a bbc guy while no one's at home", randomcomment:"123 Comment", randomlike:"191K", randomsecond:"17:51", randomlogo:"https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/8.png"},
        { randomimage:"https://rh.positivetraits.us/wp-content/uploads/2025/16/9.webp", randomname:"Seina Amaya", randomviews:"789K Views", randomrating:"99%", randomquality:"1080p", randomtime:"19 Min", randomvidku:"29 Videos", randomtitle:"Sexy Japanese Seina Amaya is learning some card tricks and getting fucked hard", randomcomment:"123 Comment", randomlike:"145K", randomsecond:"18:48", randomlogo:"https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/9.png"},
        { randomimage:"https://rh.positivetraits.us/wp-content/uploads/2025/16/10.webp", randomname:"Gina Ayumi", randomviews:"998K Views", randomrating:"91%", randomquality:"1080p", randomtime:"20 Min", randomvidku:"21 Videos", randomtitle:"Sexy Gina Ayumi opens her mouth to swallow massive load", randomcomment:"123 Comment", randomlike:"197K", randomsecond:"19:23", randomlogo:"https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/10.png"},
        { randomimage:"https://rh.positivetraits.us/wp-content/uploads/2025/16/11.webp", randomname:"Takara Kairi", randomviews:"957K Views", randomrating:"91%", randomquality:"1080p", randomtime:"11 Min", randomvidku:"21 Videos", randomtitle:"Celebrity office lady has unexpectedly naughty sex!", randomcomment:"123 Comment", randomlike:"100K", randomsecond:"10:36", randomlogo:"https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/11.png"},
        { randomimage:"https://rh.positivetraits.us/wp-content/uploads/2025/16/12.webp", randomname:"Fumiko Sora", randomviews:"475K Views", randomrating:"92%", randomquality:"1080p", randomtime:"12 Min", randomvidku:"22 Videos", randomtitle:"Please Don't Cum Inside Me?? Japanese School Girl Gets Pussy Fucked Hard With Squirting Orgasms!!!", randomcomment:"123 Comment", randomlike:"151K", randomsecond:"11:59", randomlogo:"https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/12.png"},
        { randomimage:"https://rh.positivetraits.us/wp-content/uploads/2025/16/13.webp", randomname:"Harumi Aina", randomviews:"198K Views", randomrating:"93%", randomquality:"1080p", randomtime:"13 Min", randomvidku:"23 Videos", randomtitle:"Miku Ohashi gets her very first time creampie and Asian end in the best Asian porn!", randomcomment:"123 Comment", randomlike:"123K", randomsecond:"12:54", randomlogo:"https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/13.png"},
        { randomimage:"https://rh.positivetraits.us/wp-content/uploads/2025/16/14.webp", randomname:"Akari Nara", randomviews:"946K Views", randomrating:"94%", randomquality:"1080p", randomtime:"14 Min", randomvidku:"24 Videos", randomtitle:"Horny Asian cosplayer Yui Nishikawa blows minds in extraordinary JAV creampie fuckfest", randomcomment:"123 Comment", randomlike:"155K", randomsecond:"13:12", randomlogo:"https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/14.png"},
        { randomimage:"https://rh.positivetraits.us/wp-content/uploads/2025/16/15.webp", randomname:"Hana Makaira", randomviews:"912K Views", randomrating:"95%", randomquality:"1080p", randomtime:"15 Min", randomvidku:"25 Videos", randomtitle:"Oh My Good! Youre is Beautiful", randomcomment:"123 Comment", randomlike:"165K", randomsecond:"14:21", randomlogo:"https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/15.png"},
        { randomimage:"https://rh.positivetraits.us/wp-content/uploads/2025/16/16.webp", randomname:"Keiko Kana", randomviews:"875K Views", randomrating:"96%", randomquality:"1080p", randomtime:"16 Min", randomvidku:"26 Videos", randomtitle:"I Was Driven Home From College By My Friend", randomcomment:"146K Comment", randomlike:"171K", randomsecond:"15:18", randomlogo:"https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/16.png"},
        { randomimage:"https://rh.positivetraits.us/wp-content/uploads/2025/16/17.webp", randomname:"Reina Akiara", randomviews:"890K Views", randomrating:"97%", randomquality:"1080p", randomtime:"17 Min", randomvidku:"27 Videos", randomtitle:"Lovely bedtime for tonight", randomcomment:"123 Comment", randomlike:"181K", randomsecond:"16:29", randomlogo:"https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/17.png"},
        { randomimage:"https://rh.positivetraits.us/wp-content/uploads/2025/16/18.webp", randomname:"Sada Aika", randomviews:"936K Views", randomrating:"98%", randomquality:"1080p", randomtime:"18 Min", randomvidku:"28 Videos", randomtitle:"Have You Ever Worn A Strap Like Me Now?", randomcomment:"123 Comment", randomlike:"191K", randomsecond:"17:51", randomlogo:"https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/18.png"},
        { randomimage:"https://rh.positivetraits.us/wp-content/uploads/2025/16/19.webp", randomname:"Seina Amaya", randomviews:"789K Views", randomrating:"99%", randomquality:"1080p", randomtime:"19 Min", randomvidku:"29 Videos", randomtitle:"She Was Puzzled By The Situation", randomcomment:"123 Comment", randomlike:"145K", randomsecond:"18:48", randomlogo:"https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/19.png"},
        { randomimage:"https://rh.positivetraits.us/wp-content/uploads/2025/16/20.webp", randomname:"Gina Ayumi", randomviews:"998K Views", randomrating:"91%", randomquality:"1080p", randomtime:"20 Min", randomvidku:"21 Videos", randomtitle:"Romantic sex with my cute girlfriend! It feels good and keeps climaxing  ", randomcomment:"123 Comment", randomlike:"197K", randomsecond:"19:23", randomlogo:"https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/20.png"}
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
