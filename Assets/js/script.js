$(document).ready(() => {

    $('.picture').on(
        {
        mouseenter: () => {$('p.hidden').toggle();},
        mouseleave: () => {$('p.hidden').toggle();},
        });
    
    let cv = {
        photo: '<img id="photo" class="picture" src="../../Images/D1.png" alt="Daria"></img>',
        formation: '<div class="picture"> <h4> Formation </h4> <ul style="list-style-type:disc;"> <li> <strong>Développeur fullstack Javascript</strong> </br> IFOCOP (titre RNCP, équiv. BAC+3/4) Paris, 2020 </br> </li> <li><strong>Master en Finance</strong> </br> Uninversité de Genève, Suisse </br></li> <li><strong>Bachelor en Management</strong> </br> Uninversité de Saint Pétersbourg, Russie</li> </ul> </div>',
        pointsForts: '<div class="picture"> <h4> Points Forts </h4> <ul style="list-style-type:disc;"> <li> Développement Front & Back-end </li> <li><strong>MEAN stack: MongoDB, Express, Angular, NodeJS</strong> </li> <li> <strong> Trilingue </strong> </li> </ul> </div>',
        contacts: '<div class="picture"> <h4> Contacts </h4>  <h6> Daria Chiriac </h6> <ul style="list-style-type:none;" > <li> 06 51 48 06 82 </li> <li> dariachiriac@hotmail.com </li> <li> <strong> Paris </strong> </li> <li> <img src="../../Images/linkedin_icon.png" width="25" height="25"> in/dariachiriac </li> <li> <img src="../../Images/instagram_icon.png" width="25" height="25"> dariachiriac </li> </ul> </div>',
        experiences: '<div class="picture"> <h4> Expériences </h4> <ul style="list-style-type:disc;"> <li> <strong>Chargée de marketing et développement commercial</strong> </br> PricewaterhouseCoopers BV Russie </br> St. Pétersbourg, Russie, 2013 - 2014 </br> Analyse de marché, relation client (systèmes CRM), projets RSE </br> </br> </li> <li><strong>Analyste de crédit</strong> </br> VTB Banque, siège social </br> Moscou, Russie, 2013 </br> Analyse de crédit et risques bancaires </br></li> </ul> </div>',
        competences: '<div class="picture"> <h4> Compétences </h4> <ul style="list-style-type:disc;"> <li> HTML & CSS </li> <li> JavaScript: DOM, jQuery </li> <li> Bootstrap </li> <li> Mongo DB </li> <li> Angular </li> <li> Git </li> </ul> </div>',
        interests: '<div class="picture"> <h4> Intérêts </h4> <ul style="list-style-type:disc;">  <li> Voyages </li> <li> Art </li> <li> Yoga </li> <li> Cuisine </li> </ul> </div>',

        background: 'none',
        fontSize: '13px',
    }

    $('#a').on('click', () => {
        
        let newA = document.getElementById('a'); 
        newA.innerHTML = cv.photo;
        newA.style.background = cv.background;

    });


    $('#b').on('click', () => {

        let newB = document.getElementById('b');
        newB.innerHTML = cv.formation;
        newB.style.background = cv.background;
        newB.style.fontSize = cv.fontSize;
    });

    $('#c').on('click', () => {

        let newC = document.getElementById('c');
        newC.innerHTML = cv.pointsForts;
        newC.style.background = cv.background;
        newC.style.fontSize = cv.fontSize;
    });

    $('#d').on('click', () => {

        let newD = document.getElementById('d');
        newD.innerHTML = cv.contacts;
        newD.style.background = cv.background;
        newD.style.fontSize = cv.fontSize;

    });

    $('#e').on('click', () => {

        let newE = document.getElementById('e');
        newE.innerHTML = cv.experiences;
        newE.style.background = cv.background;
        newE.style.fontSize = cv.fontSize;

    });

    $('#f').on('click', () => {
        
        let newF = document.getElementById('f');
        newF.innerHTML = cv.competences;
        newF.style.background = cv.background;
        newF.style.fontSize = cv.fontSize;

    });

    $('#g').on('click', () => {
        
        let newG = document.getElementById('g');
        newG.innerHTML = cv.interests;
        newG.style.background = cv.background;
        newG.style.fontSize = cv.fontSize;

    });

    });
