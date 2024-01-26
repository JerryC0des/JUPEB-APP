function saveUsername() {
  // Get the input value
  let username = document.getElementById('usernameInput').value;

  // Save the username in localStorage
  localStorage.setItem('username', username);
  // alert('Username saved successfully!');
}

// Retrieve the username from localStorage
let savedUsername = localStorage.getItem('username');

// Display the username on the home page
let displayElement = document.getElementById('myUserName');
if (savedUsername) {
  displayElement.textContent = `${savedUsername}`;
}

