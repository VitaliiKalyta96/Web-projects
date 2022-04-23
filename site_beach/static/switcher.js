// Create a function to change
// the hash value of the page
function changeLanguage(lang) {
location.hash = lang;
location.reload();
}

// Define the language reload anchors
var language = {
eng: {
    welcome: "Welcome in site!",
    welcome2: "Move and create future"

},
ua: {
    welcome: "Ласкаво просимо на сайт!",
    welcome2: "Рухайся та твори майбутнє"
},
};

// Check if a hash value exists in the URL
if (window.location.hash) {

// Set the content of the webpage
// depending on the hash value
if (window.location.hash == "#ua") {
    siteContent.textContent =
    language.ua.welcome;
}
}