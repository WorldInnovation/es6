

import jQuery from "jquery";
import DepView from "./depView";
import DepService from "./depService";

window.$ = window.jQuery = jQuery;

export default class DepController{
    constructor(){
        this.depView = new DepView();
        this.depService = new DepService();
        this.depID = null;
        this.name = null;
    }
    getAllDep(){
            this.depService.getAll()
                .then( (response) => {
                    this.depView.displayDepartments(response);
                });
    };
    deleteDep() {
        this.depID = event.target.name;
        this.depService.deleteDep(this.depID)
            .then((response) => {
                this.depView.displayDepartments(response);
            });
    };

    editDepartment() {
        this.depID = event.target.name;
        this.depService.editDep(this.depID)
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
        this.depID = $('#id').val();
        this.name = $('#name').val();
        this.depService.save(this.depID, this.name)
            .then((response) => {
                this.depView.displayDepartments(response);
            });
    };

}
//export default new DepController;