const correctPassword = '281118032105ry';  // Password yang baru

function checkPassword() {
    const userInput = document.getElementById('password-input').value;
    if (userInput === correctPassword) {
        window.location.href = '#article-content';
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('article-content').style.display = 'block';
    } else {
        alert('Incorrect password!');
    }
}
