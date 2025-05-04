// Navigation helper
function goTo(page) {
    window.location.href = page;
  }
  
  // Algorithm toggle
  const algoToggle = document.getElementById('algo-toggle');
  algoToggle.addEventListener('change', function () {
    const mode = this.checked ? "Popular" : "Chronological";
    alert(`${mode} mode enabled!`);
    // You can later replace this with actual sorting logic
  });
  
  // Example: dynamic post addition (simulate new post every 10s)
  const postsContainer = document.querySelector('.posts');
  
  function addPost(author, content, img = null) {
    const post = document.createElement('div');
    post.classList.add('post');
  
    let postHTML = `<h3>${author}</h3>`;
    if (img) {
      postHTML += `<img src="${img}" alt="${author}'s post image" />`;
    }
    postHTML += `<p>${content}</p>`;
  
    post.innerHTML = postHTML;
    postsContainer.prepend(post); // Add to top (latest first)
  }
  
  // Simulate post every 10 seconds
  setInterval(() => {
    const samplePosts = [
      { author: 'Ratul', content: 'Just finished our FriendBook feature!', img: null },
      { author: 'Nadim', content: 'Dark theme vibes 🔥', img: 'https://via.placeholder.com/300' },
      { author: 'Toma', content: 'Project presentation today 😰', img: null },
    ];
    const randomPost = samplePosts[Math.floor(Math.random() * samplePosts.length)];
    addPost(randomPost.author, randomPost.content, randomPost.img);
  }, 10000);
  
  // Handle story click
  const stories = document.querySelectorAll('.story');
  stories.forEach(story => {
    story.addEventListener('click', () => {
      alert(`Viewing story from: ${story.textContent}`);
      // You can expand this into a modal story viewer later
    });
  });
  