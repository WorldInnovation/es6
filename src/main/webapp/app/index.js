import jQuery from "jquery";
import DepController from "./department/depController.js";
window.$ = window.jQuery = jQuery;

export default class MainController {

    constructor() {
        this.depController = new DepController();
        this.map = new Map();
        this.map.set('deps', () => this.depController.getAllDep());
        this.map.set('deleteDep', () => this.depController.deleteDep());
        this.map.set('editDepartment', () => this.depController.editDepartment());
        this.map.set('depSave', () => this.depController.mySave());

        //this.empController = new EmpController();

        //show deps
        this.map.get('deps')(event);
    }

    init() {
        $("#content").on("click", ".listener", () => {
            let clickEvent = event.target.value;
            console.log(clickEvent);
            this.map.get(clickEvent)(event);
        });


    }


}

/*     //without buttons
let clicker = td.elem.getAttribute('data-about');
 console.log(clicker);

 if ($(this).attr('id') === "tableSelect") changeState('empList');
 if ($(this).attr('id') === "tableEdit") this.map.get('editDepartment')(event);//editDepartment(depID);
 if ($(this).attr('id') === "tableDelete") this.map.get('delete')(event);
 */

