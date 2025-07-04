//Le fichier JS pour la partie Météo

const info = document.createElement('div');

info.style.height="300px";
info.style.width="200px";
info.style.marginTop="16px";
info.style.marginBottom="16px";
info.style.border="3px solid grey";
info.style.paddingTop="16px";
info.style.paddingRight="12px";
info.style.paddingLeft="12px";
info.style.paddingBottom="24px";

document.body.appendChild(info);

const button = document.querySelector("button");
button.before(info);


function addInfo(info) {
    const addText = info.textContent="";
};

function bouton(){
    const addClass = button.classList.add("button_cardMeteo") ;
}



/* LEAFLET */
const map = L.map('map').setView([43.604429,  1.443812,], 14);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



