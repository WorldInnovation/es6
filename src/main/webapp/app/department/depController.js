

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
    deleteDep() {
        let id = event.target.name;
        this.depService.deleteDep(id)
            .then((response) => {
                this.depView.displayDepartments(response);
            });
    };

    editDepartment() {
        let id = event.target.name;
        this.depService.editDep(id)
            .then((response) => {
                this.depView.displayDepForm(response);
            });
    };

    mySave() {
        let id = $('#id').val();;
        let name =  $('#name').val();
        this.depService.saveDepartment(id,name)
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