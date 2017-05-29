
import './style.css';

import MainController from './index';

$(document).ready(function () {
    console.log('enter first');
    const main = new MainController();
    main.init();
});


