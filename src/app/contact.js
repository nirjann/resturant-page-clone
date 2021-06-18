import '../style/contact.scss';
const contactSection = document.getElementById('contact');

function makeContactSkeleton() {
    const contactSection = document.getElementById('contact');
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('container');
    contactDiv.classList.add('contact-container');
    contactDiv.id = "Contact";
    contactDiv.innerHTML = `
        <div class = 'intro'>
            <h2> Nirjan Pakhira </h2>
            <p> address: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, iusto quo magnam corporis laboriosam illo, deserunt, ratione obcaecati consectetur temporibus natus sed placeat quaerat at adipisci fugiat necessitatibus optio cupiditate. </p>
            <p> Ph. 87xxxxxxx0 </p>
            <p> Email: fsdf@dd.cc </p>
        </div>
        <div class = "social-bar">
            <ul class = 'social-list'>
                <li><i class="fab fa-facebook-square fa-3x"></i></li>
                <li><i class="fab fa-instagram-square fa-3x"></i></li>
                <li><i class="fab fa-github-square fa-3x"></i></li>
                <li><i class="fab fa-twitter-square fa-3x"></i></li>
            </ul>
        </div>


    `;
    contactSection.appendChild(contactDiv);

}

export {makeContactSkeleton};