let stringInput = document.getElementById("stringInput")

function checkPalindrome() {
    let revString = "";
    let value = stringInput.value;

    for (let i = value.length - 1; i >= 0; i--) {
        revString += value[i];
    }

    if (value === '') {
        return
    }
    else if (value.toLowerCase() === revString.toLowerCase()) {
        document.querySelector(".showPalindrome").textContent = "yes,It's a Palindrome!"
    } else {
        document.querySelector(".showPalindrome").textContent = "No,It's not a Palindrome!"
    }
    stringInput.value = ''
}
document.querySelector(".showPalindrome").textContent = ""