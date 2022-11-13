import '../styles/style.css';
import '../styles/form.css';
import '../styles/nav.css';


const body = document.querySelector('body');

let mainLayout = (() => {
    const sideBar = document.createElement('nav');
    const header = document.createElement('header');
    const content = document.createElement('main');

    body.append(sideBar, header, content);
})();
