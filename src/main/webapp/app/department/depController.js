

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
            .then(() => {
                this.depService.getAll()
                    .then( (response) => {
                        this.depView.displayDepartments(response);
                    });
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
        this.depService.saveDepartment()
            .then(() => {
                this.depService.getAll()
                    .then( (response) => {
                        this.depView.displayDepartments(response);
                    });
            }).catch((res)=>{
            if(res.responseJSON.name){
                alert("name :" + res.responseJSON.name);
            }else{
                this.depService.getAll()
                    .then( (response) => {
                        this.depView.displayDepartments(response);
                    });
            }

        });
    };

}
