var buttonCollapse = document.getElementById('button_collapse');
var buttonDance = document.getElementById('button_dance');
var buttonDrink = document.getElementById('button_drink');
var video = document.getElementById('video');


buttonCollapse.addEventListener('click', speelCollapse);
buttonDance.addEventListener('click', speelDance);
buttonDrink.addEventListener('click', speelDrink);

function speelCollapse() {
    video.src = "Collapseanimatie_eind.mp4";
    console.log('run collapse');
}

function speelDance() {
    video.src = "Danceanimatie_eind.mp4";
    console.log('run dance');
}

function speelDrink() {
    video.src = "Drinkanimatie_eind.mp4";
    console.log('run drink');
}




