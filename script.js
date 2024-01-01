function checkLeapYear() {
    const yearInput = document.getElementById('yearInput').value;
    const resultElement = document.getElementById('result');

    if ((yearInput % 4 === 0 && yearInput % 100 !== 0) || (yearInput % 400 === 0)) {
        resultElement.innerHTML = `${yearInput} est une année bissextile.`;
    } else {
        resultElement.innerHTML = `${yearInput} n'est pas une année bissextile.`;
    }
}
