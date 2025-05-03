document.addEventListener('DOMContentLoaded', () => {
    const coverInput = document.getElementById('cover-photo');
    const coverPreview = document.getElementById('cover-preview');
    const profileInput = document.getElementById('profile-photo');
    const profilePreview = document.getElementById('profile-preview');
    const themeBtn = document.getElementById('themeToggleBtn');
    const themeSelect = document.getElementById('theme');
    const body = document.body;
  

  
    // Preview cover photo
    if (coverInput && coverPreview) {
      coverInput.addEventListener('change', () => {
        const file = coverInput.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            coverPreview.src = reader.result;
          };
          reader.readAsDataURL(file);
        }
      });
    }
  
    // Preview profile photo
    if (profileInput && profilePreview) {
      profileInput.addEventListener('change', () => {
        const file = profileInput.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            profilePreview.src = reader.result;
          };
          reader.readAsDataURL(file);
        }
      });
    }
  
    // Theme toggle button
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        const newTheme = body.classList.contains('light-theme') ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        if (themeSelect) themeSelect.value = newTheme;
      });
    }
  
    // Select input change
    if (themeSelect) {
      themeSelect.addEventListener('change', () => {
        const selected = themeSelect.value;
        if (selected === 'light') {
          body.classList.add('light-theme');
        } else {
          body.classList.remove('light-theme');
        }
        localStorage.setItem('theme', selected);
      });
    }
  });
  