const usersHuman = [{
        type: "humain",
        name: "John Doe",
        email: "j.smith@gmail.com",
        age: 25,
        avatar : './img/john.png',
        icon : './img/john_icon.png',
        latitude : 43.604429,
        longitude : 1.443812
    },
    {
        type: "humain",
        name: "Jane Smith",
        email: "ja.doe@sfr.fr",
        age: 5,
        avatar : './img/jane.png',
        icon : './img/jane_icon.png',
        latitude : 43.60792, 
        longitude : 1.44133
    },
    {
        type: "humain",
        name: "Le Vénérable",
        email: "levy@gmail.com",
        age: 500,
        avatar : './img/venerable.png',
        icon : './img/venerable_icon.png',
        latitude : 43.60053,
        longitude : 1.44590
    }
];

const usersPet = [{
        type: "animal de compagnie",
        espece: "chien",
        name: "Rox",
        age: 7,
        propriétaire: "John Doe",
        avatar : './img/chien.png',
        icon : './img/chien_icon.png',
        latitude : 43.60377,
        longitude : 1.43583
    },
    {
        type: "animal de compagnie",
        espece: "renard",
        name: "Roukie",
        age: 300,
        propriétaire: "Le Vénérable",
        avatar : './img/renard.jpg',
        icon : './img/renard_icon.png',
        latitude : 43.59602,
        longitude : 1.43692
    }
];

const usersXeno = [{
        type: "Xeno",
        espece: "Krogan",
        name: "Wrex",
        menace: "Rouge",
        age: 45,
        avatar : './img/wrex.png',
        icon : './img/wrex_icon.png',
        latitude : 43.59555,
        longitude : 1.45257
    },
    {
        type: "Xeno",
        espece: "Turien",
        name: "Garrus",
        menace: "Vert",
        age: 35,
        avatar : './img/garrus.png',
        icon : './img/garrus_icon.png',
        latitude : 43.61108,
        longitude : 1.45539
    },
    {
        type: "Xeno",
        espece: "Asari",
        name: "Liara",
        menace: "ULTRA Rouge",
        age: 25,
        avatar : './img/liara.png',
        icon : './img/liara_icon.png',
        latitude : 43.61183,
        longitude :  1.43222
    }
];


const tabData = [];

tabData.push(userHuman);
tabData.push(userPet);
tabData.push(userXeno);

function cardHuman(userHuman){
    const articleHuman = document.createElement('article');
    const h2Human = document.createElement('h2');
    h2Human.textContent = userHuman.name;
    const imgHuman = document.createElement('img');
    imgHuman.innerHTML=`<img src="${userHuman.avatar}" alt=" Portrait de ${userHuman.name}">`;
    const pHuman = document.createElement('p');
    pHuman.textContent = userHuman.age + userHuman.email;
    const h1Human = document.createElement('h1');
    articleHuman.appendChild(h1Human);
    const imgHuman2 = document.createElement('img');
    articleHuman.appendChild(imgHuman2);
    const pHuman2 = document.createElement('p');
    articleHuman.appendChild(pHuman2);
    articleHuman.classList.add('card');
    return articleHuman;
}

function cardPet(userPet){
    const articlePet = document.createElement('article');
    const h2Pet = document.createElement('h2');
    h2Pet.textContent = userPet.name;
    const imgPet = document.createElement('img');
    imgPet.innerHTML=`<img src="${userPet.avatar}" alt=" Portrait de ${userPet.name}">`;
    const pPet = document.createElement('p');
    pPet.textContent = userPet.age + userPet.espece + userPet.propriétaire;
    const h1Pet = document.createElement('h1');
    articlePet.appendChild(h1Pet);
    const imgPet2 = document.createElement('img');
    articlePet.appendChild(imgPet2);
    const pPet2 = document.createElement('p');
    articlePet.appendChild(pPet2);
    articlePet.classList.add('card');
    return articlePet;
}

function cardXeno(userXeno){
    const articleXeno = document.createElement('article');
    const h2Xeno = document.createElement('h2');
    h2Xeno.textContent = userXeno.name;
    const imgXeno = document.createElement('img');
    imgXeno.innerHTML=`<img src="${userXeno.avatar}" alt=" Portrait de ${userXeno.name}">`;
    const pXeno = document.createElement('p');
    pXeno.textContent = userXeno.age + userXeno.espece + userXeno.menace;
    const h1Xeno = document.createElement('h1');
    articlePet.appendChild(h1Xeno);
    const imgXeno2 = document.createElement('img');
    articlePet.appendChild(imgXeno2);
    const pXeno2 = document.createElement('p');
    articleXeno.appendChild(pXeno2);
    articleXeno.classList.add('card');
    return articleXeno;
}

function profil(tab) {

const cardlist = [];

}