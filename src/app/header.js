import '../style/header.scss';

function createHeaderSkeleton() {
    const headerSection = document.getElementById('header');
    headerSection.classList.add('header');
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container', 'header-container');
    headerSection.appendChild(containerDiv);

    const navbar = document.createElement('div');
    navbar.classList.add('navbar');
    containerDiv.appendChild(navbar);

   
    const headerShowWrapper = document.createElement('div');
    headerShowWrapper.classList.add('header-show');
    containerDiv.appendChild(headerShowWrapper);
    
};

function createNavbarSkeleton() {
    const navbar = document.querySelector('.navbar');
    const navLogo = document.createElement('div');
    navLogo.classList.add('nav-logo');
    const navMenuWrapper = document.createElement('div');
    navMenuWrapper.classList.add('nav-menu-wrapper');
    const navMenu = document.createElement('ul');
    navMenu.classList.add('nav-menu')
    for (let i = 0; i < 3; i++) {
        let li = document.createElement('li');
        li.classList.add('nav-item');
        navMenu.appendChild(li);
    }
    navMenuWrapper.appendChild(navMenu);
    navbar.appendChild(navLogo);
    navbar.appendChild(navMenuWrapper);
    
}

function renderNavbar() {
    createHeaderSkeleton();
    createNavbarSkeleton();

    const navLogo = document.querySelector('.nav-logo');
    navLogo.innerHTML = "<h2>EsoKhai</h2>";

    const navItems = document.querySelectorAll('.nav-item');
    let navLinkTexts = ['Home', 'Chef', 'Contact'];
    let i = 0;
    navItems.forEach(item => {
        let a = document.createElement('a');
        a.setAttribute('href', '#');
        a.classList.add('nav-link', 'btn-secondary');
        a.textContent = navLinkTexts[i];
        i++;
        item.appendChild(a);

    });


};

function renderHeader() {
    renderNavbar();
    const headerShowWrapper = document.querySelector('.header-show');
    headerShowWrapper.innerHTML = `
        <div class = "show-content">
            <h2 class = 'show-text'> PLEASE HAVE SOME <span>FOOD</span> </h2>
            <a href = '#' class = 'reserve-btn btn-primary'>RESERVE TABLE </a>
            <a href = "#" class = 'menu-link'>Browse Menu </a>
        </div>
    `;

    
}
export {renderHeader};