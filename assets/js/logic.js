//Define some global scope variables
const bodyEl = document.querySelector('body');
const toggleEl = document.querySelector('#toggle');

//Function to query the mode status
function appMode() {
    let strMode = localStorage.getItem('mode');
    if(strMode == null){
        strMode = 'light';
        localStorage.setItem('mode', strMode);
    };
    return strMode;
}

//Function to render the page mode depeding on what is stored in local storage
function renderMode() {
    strMode = appMode();
    if (strMode == "dark"){
        bodyEl.setAttribute("class","dark");
    } else {
        bodyEl.setAttribute("class","light");
    };
}

// The function below toggles the light/dark mode styles for the landing and blog pages. The mode is saved to local storage.
function toggleLightDarkMode(event){
    let strMode = appMode();
    if(strMode == "dark"){
        strMode = "light";
    } else {
        strMode = "dark";
    };
    localStorage.setItem('mode', strMode);
    renderMode();
}

//Adding event listener for the toggle switch
toggleEl.addEventListener('click', toggleLightDarkMode);


