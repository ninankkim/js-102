function cipher(string, offset) {
    let caeser = '';
    string = string.toLowerCase();
    const alpha = 'abcdefghijklmnopqrstuwxyz';
    for (let x = 0; x < string.length; x ++) {
        const char = string[x];
        const index = alpha.indexOf(char);
        if (index === - 1) {
            caeser += char;
        } else {
            const position = (index + offset) % 26;
        caeser += alpha[position];
        }
    }
    return CacheStorage;
}

console.log(cipher('Genius without education is like silver in the mind!', 13))