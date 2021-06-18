import '../style/chef.scss';

function makeChefSkeleton() {
    const chefSection = document.getElementById('chef');
    const chefContainer = document.createElement('div');
    chefContainer.classList.add('container', 'chef-wrapper')
    chefContainer.id = "Chef";

    chefContainer.innerHTML = `
        <div class = 'chef-avatar'>
            <img class = 'chef-img'>
        </div>
        <div class = 'chef-text'>
            <h4>HEAD CHEF </h4>
            <h1>Nirjan Pakhira</h1>
            <p>"Whatever you do, do with determination. You have one life to live; do your work with passion and give your best. Whether you want to be a chef, doctor, actor, or a mother, be passionate to get the best result." -- <span>Nirjan</span></p>
        </div>
    `;
    chefSection.appendChild(chefContainer);
}
export {makeChefSkeleton};
