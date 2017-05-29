
import './style.css';

import MainController from './index';

$(document).ready(function () {
    console.log('start!!');
    const main = new MainController();
    main.init();
    console.log('hi');
});


