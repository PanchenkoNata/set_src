let elDiv = document.querySelector('.wrapper');
let elImg = elDiv.querySelector('img');

setTimeout( function() {
    elImg.src = './images/VanyaKiller.png';
}, 1000);

let linksArray = [  { url: 'https://www.google.com.ua/?hl=ru', name: 'Google'}, 
                    { url: 'http://ffe.procode.com.ua/', name: 'Procode'}, 
                    { url: 'https://dou.ua/', name: 'DouUa'}, 
                    { url: 'https://developer.mozilla.org/uk/', name: 'MDN'}, ];

let elNav = document.createElement( 'nav' );

for ( let link of linksArray ) {
    let elLink = document.createElement( 'a' );
    elLink.href = link.url;
    elLink.innerHTML = link.name;
    elLink.style.fontSize = '20px';
    elLink.style.padding = '20px';
    elLink.style.textDecoration = 'none';
    elNav.appendChild( elLink );
}
console.log(elNav);
let elMenu = document.querySelector('.menu');
elMenu.appendChild( elNav );