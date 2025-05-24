<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Profile</title>
  <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>

  <div class="container profile-management">

    <h2>My Profile</h2>

    <!-- View Profile -->
    <div class="profile-view">
      <div style="display: flex; align-items: center; gap: 16px;">
        <img id="avatarPreview" src="default-avatar.png" alt="Avatar">
        <?php if(isset($_SESSION['username'])): ?>
          <span class="session-username">
            <?php echo htmlspecialchars($_SESSION['username']); ?>
          </span>
        <?php endif; ?>
      </div>
      <form method="post" action="../controllers/updateProfile.php" style="margin-bottom: 1rem;">
        <label for="editName"><strong>Name:</strong></label>
        <input type="text" id="editName" name="editName" value="<?php echo isset($_SESSION['username']) ? htmlspecialchars($_SESSION['username']) : ''; ?>" required>
        <br>
        <label for="editEmail"><strong>Email:</strong></label>
        <input type="email" id="editEmail" name="editEmail" value="<?php /* You may want to fetch the user's email from DB here */ ?>" required>
        <br>
        <button type="submit">Update Profile</button>
      </form>
    </div>

    <!-- Change Avatar -->
    <div class="avatar-upload">
      <label for="avatarInput">Change Avatar:</label>
      <input type="file" id="avatarInput" accept="image/*">
    </div>

    <!-- Update Password -->
    <form class="password-change" id="passwordChangeForm" method="post" action="../controllers/updatePassword.php">
      <input type="password" id="newPassword" name="newPassword" placeholder="New Password" required>
      <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" required>
      <button type="submit">Update Password</button>
    </form>

    <!-- Back Button -->
    <button onclick="window.location.href='ActivityFeed.html'" class="back-btn">Back to Activity Feed</button>

  </div>

  <script src="../js/script.js"></script>
</body>
</html>
