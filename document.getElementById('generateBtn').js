document.getElementById('generateBtn').addEventListener('click', generateRandomString);

function generateRandomString() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let randomString = '';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters[randomIndex];
    }
    document.getElementById('randomString').innerText = randomString;
}
