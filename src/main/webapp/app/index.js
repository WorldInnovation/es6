import jQuery from "jquery";
import DepController from "./department/depController.js";
import EmpController from "./employee/empController.js";
window.$ = window.jQuery = jQuery;

export default class MainController {

    constructor() {
        this.depController = new DepController();
        this.empController = new EmpController();
        this.map = new Map();
        this.map.set('deps', () => this.depController.getAllDep());
        this.map.set('deleteDep', () => this.depController.deleteDep());
        this.map.set('editDepartment', () => this.depController.editDepartment());
        this.map.set('depSave', () => this.depController.mySave());
        this.map.set('addDepartment', () => this.depController.editDepartment());
        this.map.set('employeesList', () => this.empController.getEmpList());
        this.map.set('empDelete', () => this.empController.deleteEmp());
        this.map.set('employeeEdit', () => this.empController.editEmployee());

        //show deps
        this.map.get('deps')(event);
    }

    init() {
        $("#content").on('click', '.listener', () => {
            let clickEvent = event.target.value;
            console.log(clickEvent);
            if(this.map.has(clickEvent)){
                this.map.get(clickEvent)(event);
                if(clickEvent == 'depSave'|| 'deleteDep'){
                    this.map.get('deps')(event);
                }
            }
            else{
                this.map.get('deps')(event);
            }
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

