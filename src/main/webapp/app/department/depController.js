

import jQuery from "jquery";
import DepView from "./depView";
import DepService from "./depService";

window.$ = window.jQuery = jQuery;

export default class DepController{
    constructor(){
        this.depView = new DepView();
        this.depService = new DepService();
        this.id = null;
        this.name = null;
    }
    getAllDep(){
            this.depService.getAll()
                .then( (response) => {
                    this.depView.displayDepartments(response);
                });
    };
    deleteDep() {
        this.id = event.target.name;
        this.depService.deleteDep(this.id)
            .then((response) => {
                this.depView.displayDepartments(response);
            });
    };

    editDepartment() {
        this.id = event.target.name;
        this.depService.editDep(this.id)
            .then((response) => {
                this.depView.displayDepForm(response);
            });
    };

    mySave() {
/*        let id = $('#id').val();;
        let name =  $('#name').val();*/
        this.depService.saveDepartment()
            .then((response) => {
                this.depView.displayDepartments(response);
            });
    };

    getDepName(event) {
        this.id = $('#id').val();
        this.name = $('#name').val();
        this.depService.save(this.id, this.name)
            .then((response) => {
                this.depView.displayDepartments(response);
            });
    };

}
//export default new DepController;