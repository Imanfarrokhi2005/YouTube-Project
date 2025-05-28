import { videos } from "./data/videos.js";

renderPage();

document.querySelector(".js-youtube-logo").addEventListener("click", () => {
  location.reload();
});

document.querySelector(".js-home-link").addEventListener("click", () => {
  location.reload();
});

export function renderPage() {
  let pageHTHML = "";

  videos.forEach((video) => {
    pageHTHML += `
      <div class="video">
        <div class="video-preview">
          <a href=${video.video.videoLink} target="_blank">
            <img src=${video.video.tumbnailImage} class="thumbnail">
          </a>
          <div class="video-time">${video.video.videoTime}</div>
        </div>
        <div class="video-info-grid">
          <div class="channel-profile">
            <a href=${video.profile.profileLink} target="_blank"><img src=${video.profile.profileImage}
                class="channel-picture">
            </a>
            <div class="profile-demo">
              <div><img src=${video.profile.profileImage}></div>
              <div class="info-demo">
                <div>${video.profile.profileName}</div>
                <div><span>${video.profile.subscribesNumber} subscribers</span></div>
              </div>
            </div>
          </div>
          <div class="video-infos">
            <a href=${video.video.videoLink} target="_blank"
              style="text-decoration: none; color: black;"">
              <p class=" video-title">
              ${video.video.videoTitle}</p>
            </a>
            <a href=${video.profile.profileLink} target="_blank" style="text-decoration: none;
            color: black;">
              <p class="video-author">${video.profile.profileName}</p>
            </a>
            <p class="video-stats">${video.video.videoStats.view} views &#183; ${video.video.videoStats.date} ago</p>
          </div>
        </div>
      </div>
    `;
  });

  document.querySelector(".js-video-grid").innerHTML = pageHTHML;
}
