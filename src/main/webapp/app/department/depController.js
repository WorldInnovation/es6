

import jQuery from "jquery";
import DepView from "./depView";
import DepService from "./depService";

window.$ = window.jQuery = jQuery;

export default class DepController{
    constructor(){
        this.depView = new DepView();
        this.depService = new DepService();
    }
    getAllDep(){
            this.depService.getAll()
                .then( (response) => {
                    this.depView.displayDepartments(response);
                });
    };
    deleteDep(event) {
        let id = event.target.name;
        this.depService.delete(id)
            .then((response) => {
                this.depView.displayDepartments(response);
            });
    };

    editDepartment(event) {
        let id = event.target.name;
        this.depService.update(id)
            .then((response) => {
                this.depView.displayDepartmentForm(response);
            });
    };

    depSave(event) {
        let departmentId = event.target.name;
        this.depService.add(departmentId)
            .then((response) => {
                this.depView.displayDepartments(response);
            });
    };

    getDepName(event) {
        let id = $('#id').val();
        let name = $('#name').val();
        this.depService.save(id, name)
            .then((response) => {
                this.depView.displayDepartments(response);
            });
    };

}