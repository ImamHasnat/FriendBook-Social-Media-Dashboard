function accept(name) {
    alert(`${name} accepted as friend.`);
  }
  
  function reject(name) {
    alert(`${name} was rejected.`);
  }
  
  function addFriend(name) {
    alert(`Friend request sent to ${name}.`);
  }
  
  function searchFriend() {
    const query = document.getElementById("searchFriend").value;
    alert(`Searching for "${query}"...`);
  }
  




  function react(type) {
    alert(`You reacted with: ${type}`);
  }
  
  function postComment() {
    const input = document.getElementById("commentInput");
    const text = input.value.trim();
  
    if (text !== "") {
      const commentList = document.getElementById("commentsList");
      const comment = document.createElement("p");
      comment.textContent = text;
      commentList.appendChild(comment);
      input.value = "";
    } else {
      alert("Comment cannot be empty.");
    }
  } 





  function setFeed(type) {
    const feed = document.getElementById("feed");
    feed.innerHTML = "";
  
    if (type === "recent") {
      feed.innerHTML += "<div class='feed-post'>Recent Post A</div>";
      feed.innerHTML += "<div class='feed-post'>Recent Post B</div>";
    } else {
      feed.innerHTML += "<div class='feed-post'>Top Post X</div>";
      feed.innerHTML += "<div class='feed-post'>Top Post Y</div>";
    }
  
    document.getElementById("message").innerText = `Viewing ${type} posts`;
  }
  
  function refreshFeed() {
    const feed = document.getElementById("feed");
    feed.innerHTML += "<div class='feed-post'>New Post (refreshed)</div>";
    document.getElementById("message").innerText = "Feed refreshed!";
  }







  const hashtagDatabase = {
    "#Nature": ["Beautiful sunset", "Forest vibes", "Green earth"],
    "#AI": ["AI is changing the world", "Robots are cool", "ChatGPT update"],
    "#Travel": ["Dhaka to Cox’s Bazar trip", "Sundarban adventure", "Sylhet tour"],
    "#Food": ["Street food in Dhaka", "Delicious biryani", "Home cooking tips"]
  };
  
  function showPosts(tag) {
    const posts = hashtagDatabase[tag] || ["No posts found."];
    const container = document.getElementById("hashtagPosts");
    container.innerHTML = `<h3>Posts under ${tag}</h3>` + posts.map(p => `<p>${p}</p>`).join("");
  
    renderVolumeGraph(tag);
  }
  
  function followHashtag() {
    const tag = document.getElementById("hashtagInput").value.trim();
    if (!tag.startsWith("#")) {
      alert("Please enter a valid hashtag (start with #)");
      return;
    }
    const followedDiv = document.getElementById("followedTags");
    followedDiv.innerHTML += `<p>Followed: ${tag}</p>`;
    document.getElementById("hashtagInput").value = "";
  }
  
  function renderVolumeGraph(tag) {
    const graph = document.getElementById("volumeGraph");
    const volume = Math.floor(Math.random() * 100) + 20; // simulate volume
    graph.innerHTML = `
      <h3>Trend Volume for ${tag}</h3>
      <div class="volume-bar" style="width: ${volume}%;"></div>
      <p>${volume} mentions this week</p>
    `;
  }
  
  
  
  