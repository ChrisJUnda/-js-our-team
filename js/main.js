'use strict'
console.log('Chris is here')

const team = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder and CEO',
        foto: 'wayne-barnett-founder-ceo.jpg',
    },

    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg',
    },

    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg',
    },

    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg',
    },

    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg',
    },

    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg',
    },
];

console.log(team);


//Milestone 1

for(let i = 0; i < team.length; i++){
    const person = team[i]
    for(let key in person){
        console.log(`${key}: ${person[key]}`);


        console.log('---');
    }

}

//Milestone 2

const listaGruppo = document.getElementById('lista')

console.log(listaGruppo)
/*
<li>
            <h3>Nome Persona</h3>
            <h5>Ruolo Persona</h5>
            <p>Immagine persona</p>
        </li>
*/
let liElement = '' ;

for (let i = 0; i < team.length; i++) {
    const person = team[i];

    liElement += `
    <li>
        <h3>${person.nome}</h3>
        <h5>${person.ruolo}</h5>
        <p>${person.foto}</p>
    </li>`



}

listaGruppo.innerHTML = liElement


