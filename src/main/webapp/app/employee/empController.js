

import jQuery from "jquery";
import EmpView from "./empView";
import EmpService from "./empService";

window.$ = window.jQuery = jQuery;

export default class EmpController{
    constructor(){
        this.empView = new EmpView();
        this.empService = new EmpService();
    }
    getEmpList(){
        let id = event.target.name;
        this.empService.getAllEmp(id)
            .then( (response) => {
                this.empView.displayEmployees(response);
            });
    };

    deleteEmp() {
        let id = event.target.name;
        this.empService.deleteEmp(id)
            .then((response) => {
                this.empView.displayEmployees(response);
            });
    };
    //---------- editEmployeesForm

}
///export default EmpController();