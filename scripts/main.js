let linksArray = [  { url: 'https://www.google.com.ua/?hl=ru', name: 'Google'}, 
                    { url: 'http://ffe.procode.com.ua/', name: 'Procode'}, 
                    { url: 'https://dou.ua/', name: 'DouUa'}, 
                    { url: 'https://developer.mozilla.org/uk/', name: 'MDN'}, ];

let elNav = document.createElement( 'nav' );
let html = '';
for ( let link of linksArray ) {
    let linkHtml = `<a href = '${link.url}'>${link.name}</a>`;
    html += linkHtml;
}
elNav.innerHTML = html;
console.log(elNav);

let elMenu = document.querySelector('.menu');
elMenu.appendChild( elNav );
console.log(elMenu);

let elLink = document.querySelectorAll('.menu nav a');
for ( let link of elLink ) {
    link.style.fontSize = '40px';
    link.style.color = 'green';
    link.style.padding = '20px';
    link.style.textDecoration = 'none';
}

