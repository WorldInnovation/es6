

import jQuery from "jquery";
import EmpView from "./empView";
import EmpService from "./empService";

window.$ = window.jQuery = jQuery;

export default class EmpController{
    constructor(){
        this.empView = new EmpView();
        this.empService = new EmpService();
        this.depID = null;
        this.id = null;
    }
    getEmpList(){
        this.depID = event.target.name;
        this.empService.getAllEmp(this.depID)
            .then( (response) => {
                this.empView.displayEmployees(response,this.depID);
            });
    };

    deleteEmp() {
        this.id = event.target.name;
        this.empService.deleteEmp(this.id)
            .then((response) => {
                this.empView.displayEmployees(response);
            });
    };

    editEmployee() {
        this.id = event.target.name;
        if(event.target.value == 'addEmployee') {
            this.id = null;
        }
        this.empService.editEmp(this.depID, this.id)
            .then((response) => {
                this.empView.editEmployeesForm(response);
            });
    };

    /*    addEmployee(){
            this.id = null;
            this.empService.editEmp(this.depID, this.id)
                .then((response) => {
                    this.empView.editEmployeesForm(response);
                });
        };*/

    empSave() {
        this.empService.employeeSave(this.depID, this.id)
            .then((response) => {
                this.empView.displayEmployees(response);
            });
    }

    //---------- editEmployeesForm

}
///export default EmpController();