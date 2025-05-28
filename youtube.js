import { videos } from "./data/videos.js";

renderPage();

export function renderPage() {
  let pageHTHML = "";
  let searchVideos = [];

  const url = new URL(window.location.href);
  const searchPram = url.searchParams.get("search");
  if (searchPram) {
    searchVideos = videos.filter((video) => {
      const profileName = video.profile.profileName.toLowerCase();
      const title = video.video.videoTitle.toLowerCase();
      const nameCheck = profileName.includes(searchPram);
      const titleCheck = title.includes(searchPram);

      return nameCheck || titleCheck;
    });
    if (searchVideos.length === 0) {
      alert("No videos matched your search!");
    } else {
      console.log("load page with filter");
    }
  } else {
    searchVideos = videos;
  }

  searchVideos.forEach((video) => {
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
  console.log("load page");
}

document.querySelector(".js-youtube-logo").addEventListener("click", () => {
  window.location.href = "youtube.html";
});

document.querySelector(".js-home-link").addEventListener("click", () => {
  window.location.href = "youtube.html";
});

document.querySelector(".js-search-button").addEventListener("click", () => {
  const searchWord = document.querySelector(".js-search-bar").value;
  window.location.href = `youtube.html?search=${searchWord}`;
});

document
  .querySelector(".js-search-bar")
  .addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const searchWord = document.querySelector(".js-search-bar").value;
      window.location.href = `youtube.html?search=${searchWord}`;
    }
  });
