const correctPassword = '281118032105ry';

function checkPassword() {
    const userInput = document.getElementById('password-input').value;
    if (userInput === correctPassword) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('article-content').style.display = 'block';
    } else {
        alert('Incorrect password!');
    }
}
