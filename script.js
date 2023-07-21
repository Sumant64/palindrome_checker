let txtInput = document.querySelector(".inputs input");
let checkBtn = document.querySelector(".inputs button");
let infoTxt = document.querySelector(".info-txt");
let filterInput;

txtInput.addEventListener("keyup", () => {
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(filterInput){
        return checkBtn.classList.add('active');
    }

    infoTxt.computedStyleMap.display = "none";
    checkBtn.classList.remove("active");
})

checkBtn.addEventListener("click", () => {
    let reverseInput = filterInput.split("").reverse().join("");
    infoTxt.style.display = "block";
    if(filterInput != reverseInput){
        return infoTxt.innerHTML = `No, <span>'${txtInput.value}'</span> isn't a palindrome!`;
    }

    infoTxt.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a palindrome!`;
})