const slider = document.querySelector("#password-length-slider");
const slider_value_display = document.querySelector('.slider-value');
const include_uppercase = document.querySelector('.include-uppercase');
const include_numbers = document.querySelector('.include-numbers');
const include_symbols = document.querySelector('.include-symbols');
const output = document.querySelector(".text-output");
const copy_icon = document.querySelector('.copy-icon');
const copy_btn = document.querySelector('.copy-btn');
var characters ='abcdefghijklmnopqrstuvwxyz';
var uppercase_char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var symbols = '@#!*?$&';
output.value = "Your Password Here";
slider.addEventListener("change", () => {
    slider_value_display.textContent = slider.value;
})
function copy_btn_click() {
        navigator.clipboard.writeText(output.value);
        copy_icon.classList.add("fa-check");
        setTimeout(() => {  
            copy_icon.classList.remove("fa-check");
        }, 2000);
    }

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    return result;
}
function generate_btn_clicked() {
    if (include_uppercase.checked == 1 && !characters.includes(uppercase_char)) {
        characters += uppercase_char;
    }else if(include_uppercase.checked == 0){
        characters.replace(uppercase_char, "");
    }
    if (include_numbers.checked == 1 && !characters.includes(numbers)) {
            characters += numbers;
        }
    if (include_symbols.checked == 1 && !characters.includes(symbols)) {
            characters += symbols;
        }
    output.value = generateString(slider.value);
    characters ='abcdefghijklmnopqrstuvwxyz';
}
