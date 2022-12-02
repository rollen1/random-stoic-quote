const keys = Object.keys(quotes);

quoteGenerator();

function quoteGenerator() {
    const randomIndex = keys[Math.floor(Math.random() * keys.length)];
    const item = quotes[randomIndex];
    document.getElementById('quote').innerHTML = item;
}
