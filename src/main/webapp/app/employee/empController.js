

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
        let depID = event.target.name;
        this.empService.getAllEmp(depID)
            .then( (response) => {
                this.empView.displayEmployees(response,depID);
            });
    };

    deleteEmp() {
        let id = event.target.name;
        this.empService.deleteEmp(id)
            .then((response) => {
                this.empView.displayEmployees(response);
            });
    };

    editEmployee() {
        let id = event.target.name;
        this.empService.editEmp(this.depID, id)
            .then((response) => {
                this.empView.editEmployeesForm(response);
            });
    };

    //---------- editEmployeesForm

}
///export default EmpController();