document.addEventListener('DOMContentLoaded', function () {
    const posts = [
        { username: "Alamin Sir", content: "New marks uploaded in WebTech! 🎉" },
        { username: "Spider Man", content: "Just saved the city again 🕸️", image: "spidey.jpg" },
        { username: "Groupmate", content: "Bhai, kal ke project presentation ready!" }
    ];

    const stories = [
        "Your Story",
        "Alamin",
        "Spider",
        "Groupmate"
    ];

    const postsContainer = document.querySelector('.posts');
    const storiesContainer = document.querySelector('.stories');

    // Dynamically add stories
    stories.forEach(story => {
        const storyElement = document.createElement('div');
        storyElement.classList.add('story');
        storyElement.textContent = story;
        storiesContainer.appendChild(storyElement);
    });

    // Dynamically add posts
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const postHeader = document.createElement('h3');
        postHeader.textContent = post.username;
        postElement.appendChild(postHeader);

        if (post.image) {
            const postImage = document.createElement('img');
            postImage.src = post.image;
            postImage.alt = post.username;
            postElement.appendChild(postImage);
        }

        const postContent = document.createElement('p');
        postContent.textContent = post.content;
        postElement.appendChild(postContent);

        postsContainer.appendChild(postElement);
    });

    // Toggle Algorithm functionality
    document.getElementById('algo-toggle').addEventListener('change', function () {
        // Here you can add functionality to switch between Chrono and Popular algorithms
        if (this.checked) {
            console.log("Popular algorithm selected");
            // Sort posts by popular algorithm (you can implement sorting logic here)
        } else {
            console.log("Chronological algorithm selected");
            // Sort posts chronologically (you can implement sorting logic here)
        }
    });
});

// Function to redirect to pages
function goTo(page) {
    window.location.href = page;
}
