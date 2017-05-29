
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

        //show deps
        this.map.get('deps')(event);
    }
    init() {

        $("#content").on("click", "#depTable td", function () {
            console.log('click!');

            depID = $(this).closest('tr').attr('id');// table row ID
            console.log(depID);
            config.depID = depID;
            window.depID = $(this).depID;
            $("#content").off();
            if ($(this).attr('id') === "select") changeState('empList');
            if ($(this).attr('id') === "edit") this.map.get('editDepartment')(event);;//editDepartment(depID);
            if ($(this).attr('id') === "delete") this.map.get('delete')(event);
        });
        /*
        *         $('body').on('click', '.listener', (event) => {
         let valueFromEvent = event.target.value;
         this.map.get(valueFromEvent)(event);
         });
         */
    }


}


