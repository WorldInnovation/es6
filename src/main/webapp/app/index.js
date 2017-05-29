
import jQuery from "jquery";
import DepController from "./department/depController.js";
window.$ = window.jQuery = jQuery;

export default class  MainController {

    constructor() {
        this.depController = new DepController();
        this.map = new Map();
        this.map.set('deps', () => this.depController.getAllDep());
        this.map.set('delete', () => this.depController.delete(depID));
        this.map.set('editDepartment', () => this.depController.editDepartment(depID));
        this.map.set('depSave', () => this.depController.depSave(depID, name));

        //this.empController = new EmpController();
    }
    init() {
            this.map.get('deps')(event);
        console.log('init!');
    }


}


