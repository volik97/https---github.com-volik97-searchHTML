const links = Array.from(document.getElementsByClassName('menu__link'));
const subMenu = Array.from(document.getElementsByClassName('menu_sub'));

for (let link of links) {
    link.onclick = () => {
        const parent = link.parentElement;
        checkActive(subMenu);
        if (parent.querySelector('.menu_sub').className === 'menu menu_sub') {
            parent.querySelector('.menu_sub').classList.toggle('menu_active');
        } else {
            parent.querySelector('.menu_sub').className = 'menu menu_sub';
        }

        if (link.closest('.menu_main')) {
            return false
        }
    }
}

function checkActive(subMenu) {
    for (let sub of subMenu) {
        if (sub.className === 'menu menu_sub menu_active') {
            sub.className = 'menu menu_sub';
        }
    }
}