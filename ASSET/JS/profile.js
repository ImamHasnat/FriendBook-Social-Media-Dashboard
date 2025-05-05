document.addEventListener('DOMContentLoaded', () => {
  const coverInput = document.getElementById('cover-photo');
  const coverPreview = document.getElementById('cover-preview');
  const profileInput = document.getElementById('profile-photo');
  const profilePreview = document.getElementById('profile-preview');
  const themeBtn = document.getElementById('themeToggleBtn');
  const themeSelect = document.getElementById('theme');
  const body = document.body;

  // === Load theme from localStorage on page load ===
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
      body.classList.add('light-theme');
      themeSelect?.value = 'light';
  } else {
      body.classList.remove('light-theme');
      themeSelect?.value = 'dark';
  }

  // === Cover photo preview ===
  coverInput?.addEventListener('change', () => {
      const file = coverInput.files[0];
      if (file) {
          const reader = new FileReader();
          reader.onload = () => {
              if (coverPreview) coverPreview.src = reader.result;
          };
          reader.readAsDataURL(file);
      }
  });

  // === Profile photo preview ===
  profileInput?.addEventListener('change', () => {
      const file = profileInput.files[0];
      if (file) {
          const reader = new FileReader();
          reader.onload = () => {
              if (profilePreview) profilePreview.src = reader.result;
          };
          reader.readAsDataURL(file);
      }
  });

  // === Theme toggle using button ===
  themeBtn?.addEventListener('click', () => {
      const isLight = body.classList.toggle('light-theme');
      const newTheme = isLight ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      if (themeSelect) themeSelect.value = newTheme;
  });

  // === Theme change using dropdown/select ===
  themeSelect?.addEventListener('change', () => {
      const selectedTheme = themeSelect.value;
      body.classList.toggle('light-theme', selectedTheme === 'light');
      localStorage.setItem('theme', selectedTheme);
  });
});
