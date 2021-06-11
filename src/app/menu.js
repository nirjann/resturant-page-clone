import '../style/menu.scss';
const json = require('../static/json/menu-items.json');

function makeMenuSkeleton() {
    const menu = document.getElementById('tabbed-menu');
    const menuWrapper = document.createElement('div');
    menuWrapper.classList.add('container');
    menuWrapper.innerHTML = `
        <ul class = 'menu-list></ul>

    `;
    menu.appendChild(menuWrapper);


}
console.dir(json);