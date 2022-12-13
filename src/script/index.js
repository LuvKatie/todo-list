import '../styles/style.css';
import '../styles/form.css';
import '../styles/nav.css';
import '../styles/mainContent.css';
import '../styles/modal.css';
import '../styles/taskmodal.css'
import { taskModal, newTaskEvent, newTaskDetails, removeTaskMode, exitModal } from './taskmodal';


export const body = document.querySelector('body');

let mainLayout = (() => {
    const sideBar = document.createElement('nav');
    const content = document.createElement('main');

    body.append(sideBar, content);
})();

taskModal();
newTaskDetails();
newTaskEvent();
removeTaskMode();
exitModal();