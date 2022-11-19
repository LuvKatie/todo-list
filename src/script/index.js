import '../styles/style.css';
import '../styles/form.css';
import '../styles/nav.css';
import '../styles/mainContent.css';


const body = document.querySelector('body');

let mainLayout = (() => {
    const sideBar = document.createElement('nav');
    const content = document.createElement('main');

    body.append(sideBar, content);
})();

//gh-pages