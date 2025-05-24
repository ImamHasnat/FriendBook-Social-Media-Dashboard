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
  

   //like comment


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




  //activity feed

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
  
  function viewStory(user) {
    alert("Viewing story of " + user);
  }
  
  function uploadStory() {
    alert("Upload story feature coming soon!");
  }
  
  function logout() {
    
    window.location.href = "FormValidation.html";
  }
  
  




  //hashtag

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











  // Feed control (used only in index.html)
  /* function setFeed(type) {
  const feed = document.getElementById("feed");
  feed.innerHTML = "";

  if (type === "recent") {
    feed.innerHTML += "<div class='feed-post'>Recent Post A</div>";
    feed.innerHTML += "<div class='feed-post'>Recent Post B</div>";
  } else {
    feed.innerHTML += "<div class='feed-post'>Top Post X</div>";
    feed.innerHTML += "<div class='feed-post'>Top Post Y</div>";
  }
}

function refreshFeed() {
  const feed = document.getElementById("feed");
  feed.innerHTML += "<div class='feed-post'>New Post (refreshed)</div>";
}*/





// Profile management
function openEdit() {
  document.querySelector('.profile-edit').style.display = 'block';
  document.querySelector('.profile-view').style.display = 'none';

  document.getElementById('editName').value = document.getElementById('displayName').innerText;
  document.getElementById('editEmail').value = document.getElementById('displayEmail').innerText;
}

function cancelEdit() {
  document.querySelector('.profile-edit').style.display = 'none';
  document.querySelector('.profile-view').style.display = 'block';
}

function saveProfile() {
  const name = document.getElementById('editName').value;
  const email = document.getElementById('editEmail').value;

  if (name && email) {
    document.getElementById('displayName').innerText = name;
    document.getElementById('displayEmail').innerText = email;
    cancelEdit();
    alert("Profile updated successfully!");
  } else {
    alert("Please fill in all fields.");
  }
}

const avatarInput = document.getElementById('avatarInput');
if (avatarInput) {
  avatarInput.addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById('avatarPreview').src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
}

function updatePassword() {
  const pass1 = document.getElementById('newPassword').value;
  const pass2 = document.getElementById('confirmPassword').value;

  if (!pass1 || !pass2) {
    alert("Please fill in both password fields.");
    return;
  }

  if (pass1 !== pass2) {
    alert("Passwords do not match!");
    return;
  }

  alert("Password updated successfully!");
  document.getElementById('newPassword').value = "";
  document.getElementById('confirmPassword').value = "";
}






/*notification*/
function toggleNotifications() {
  const dropdown = document.getElementById("notif-dropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}






/*form validation*/
function showForm(formId) {
  const forms = document.querySelectorAll('.form-container');
  forms.forEach(form => form.classList.remove('show'));

  document.getElementById(formId).classList.add('show');
  document.getElementById('message').innerText = '';
}

function login() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  if (email && password) {
    document.getElementById('message').innerText = 'Login successful!';
  } else {
    document.getElementById('message').innerText = 'Please enter email and password.';
  }
}

function signup() {
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  if (email && password) {
    document.getElementById('message').innerText = 'Signup successful!';
    showForm('loginForm');
  } else {
    document.getElementById('message').innerText = 'Please fill in all fields.';
  }
}

function forgotPassword() {
  const email = document.getElementById('forgotEmail').value;

  if (email) {
    document.getElementById('message').innerText = 'Password reset email sent!';
    showForm('loginForm');
  } else {
    document.getElementById('message').innerText = 'Enter your email to reset password.';
  }
}











