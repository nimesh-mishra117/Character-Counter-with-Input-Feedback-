const input = document.getElementById('textarea');
const character = document.getElementById('character');
const characterremaining = document.getElementById('character2');
const maxChars = 100;

const letterCount = document.getElementById('letterCount');
const digitCount = document.getElementById('digitCount');
const specialCharCount = document.getElementById('specialCharCount');


input.addEventListener('input', function () {
    character.textContent = input.value.length + " character";
    const remaining = maxChars - input.value.length;
    characterremaining.textContent = remaining + " characters remaining";
    if (remaining > 50) {
        characterremaining.style.color = "green";
    } else if (remaining > 20) {
        characterremaining.style.color = "orange";

    } else {
        characterremaining.style.color = "red";
        characterremaining.textContent = remaining + " Less characters remaining";
    }

    updateCategoryCounts(input.value);
})

function identifyCharType(char) {
    if (!isNaN(char) && char.trim() !== "") {
        return "digit";
    } else if (/^[a-zA-Z]$/.test(char)) {
        return "letter";
    } else {
        return "special character";
    }
}

function updateCategoryCounts(text) {
    let letters = 0;
    let digits = 0;
    let specialChars = 0;

    for (let i = 0; i < text.length; i++) {
        const charType = identifyCharType(text[i]);
        if (charType === "letter") {
            letters++;
        } else if (charType === "digit") {
            digits++;
        } else if (charType === "special character") {
            specialChars++;
        }
    }

    letterCount.textContent = letters;
    digitCount.textContent = digits;
    specialCharCount.textContent = specialChars;
}
