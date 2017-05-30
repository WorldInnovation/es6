import jQuery from "jquery";
import DepController from "./department/depController.js";
window.$ = window.jQuery = jQuery;

export default class MainController {

    constructor() {
        this.depController = new DepController();
        this.map = new Map();
        this.map.set('deps', () => this.depController.getAllDep());
        this.map.set('delete', () => this.depController.delete(event));
        this.map.set('editDepartment', () => this.depController.editDepartment(event));
        this.map.set('depSave', () => this.depController.depSave(event));

        //this.empController = new EmpController();

        //show deps
        this.map.get('deps')(event);
    }

    init() {
        $("#content").on("click", ".listener", () => {
            let clickEvent = event.target.value;
            console.log(clickEvent);
            if (clickEvent === "employeesList") this.map.get('employeesList')(event);
            if (clickEvent === "editDepartment") this.map.get('editDepartment')(event);//editDepartment(depID);
            if (clickEvent === "deleteDep") this.map.get('delete')(event);
        });

/*        $("#content").on("click", "#depTable td", () => {
           /!* let clickEvent = event.target.value;
            console.log(clickEvent);*!/

            let clicker = td.elem.getAttribute('data-about');
            console.log(clicker);

             if ($(this).attr('id') === "tableSelect") changeState('empList');
             if ($(this).attr('id') === "tableEdit") this.map.get('editDepartment')(event);//editDepartment(depID);
             if ($(this).attr('id') === "tableDelete") this.map.get('delete')(event);

        });*/

    }


}

/*     //without buttons
let clicker = td.elem.getAttribute('data-about');
 console.log(clicker);

 if ($(this).attr('id') === "tableSelect") changeState('empList');
 if ($(this).attr('id') === "tableEdit") this.map.get('editDepartment')(event);//editDepartment(depID);
 if ($(this).attr('id') === "tableDelete") this.map.get('delete')(event);
 */

