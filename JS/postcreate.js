// Variables to handle form transitions
const nextToPreviewBtn = document.getElementById('next-to-preview');
const backFromComposerBtn = document.getElementById('back-from-composer');
const backFromPreviewBtn = document.getElementById('back-from-preview');
const editPostBtn = document.getElementById('edit-post-btn');

// Form Elements
const postComposerForm = document.getElementById('post-composer-form');
const postPreviewForm = document.getElementById('post-preview-form');

// Media Preview Elements
const mediaInput = document.getElementById('media-input');
const mediaPreview = document.getElementById('media-preview');

// Input Fields
const postText = document.getElementById('post-text');
const postTags = document.getElementById('post-tags');
const scheduleTimeInput = document.getElementById('schedule-time');
const privacySetting = document.getElementById('privacy-setting'); // NEW

// Handle next button from Post Composer to Post Preview
nextToPreviewBtn.addEventListener('click', () => {
    const postTextContent = postText.value;

    // Simple validation for empty post text
    if (postTextContent.trim() === '') {
        alert('Please enter some content for your post.');
        return;
    }

    // Update the preview with post text content
    document.getElementById('preview-text').textContent = postTextContent;

    // Preview schedule time if provided
    const scheduleTime = scheduleTimeInput.value;
    const scheduleTimePreview = document.getElementById('schedule-time-preview');
    scheduleTimePreview.textContent = scheduleTime ? new Date(scheduleTime).toLocaleString() : 'Not Scheduled';

    // Update preview tags
    const tagsPreview = document.getElementById('preview-tags');
    tagsPreview.textContent = postTags.value ? `#${postTags.value.split(' ').join(' #')}` : '';

    // Update privacy info
    const privacy = privacySetting.value;
    const privacyInfo = document.getElementById('privacy-setting-preview');
    privacyInfo.textContent = `Privacy: ${capitalizeFirstLetter(privacy)}`;

    // Handle media preview (image or video)
    const mediaPreviewContainer = document.getElementById('preview-media');
    const files = mediaInput.files;
    if (files.length > 0) {
        const file = files[0];
        const fileURL = URL.createObjectURL(file);
        const mediaElement = file.type.startsWith('video') ?
            `<video src="${fileURL}" controls></video>` :
            `<img src="${fileURL}" alt="Preview Media" />`;
        mediaPreviewContainer.innerHTML = mediaElement;
    } else {
        mediaPreviewContainer.innerHTML = '';
    }

    // Transition to Post Preview
    postComposerForm.style.display = 'none';
    postPreviewForm.style.display = 'block';
});

// Back button functionality from Post Preview to Post Composer
backFromPreviewBtn.addEventListener('click', () => {
    postPreviewForm.style.display = 'none';
    postComposerForm.style.display = 'block';
});

// Back button functionality from Post Composer to Activity Feed (or whatever page)
backFromComposerBtn.addEventListener('click', () => {
    window.location.href = 'feed.html'; // Replace with correct path if needed
});

// Handle file input (media preview)
mediaInput.addEventListener('change', () => {
    const file = mediaInput.files[0];
    
    // Clear previous media preview
    mediaPreview.innerHTML = '';
    
    // Show selected media preview
    if (file) {
        const fileURL = URL.createObjectURL(file);
        const mediaElement = file.type.startsWith('video') ? 
            `<video src="${fileURL}" controls></video>` : 
            `<img src="${fileURL}" alt="Preview Media" />`;
        mediaPreview.innerHTML = mediaElement;
    }
});

// Handle Edit Button functionality (from Preview to Composer)
editPostBtn.addEventListener('click', () => {
    postPreviewForm.style.display = 'none';
    postComposerForm.style.display = 'block';
});

// Helper function to capitalize first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
