export default class DepService {

    getAllEmp() {
        console.log(event.target.name);
        let employeesList =
            $.ajax({
                type: "GET",
                url: "/employeesList",
                data: {depID: event.target.name},

            });
        return employeesList;
    };

    deleteEmp() {
        let deleteEmp = $.ajax({
            url: '/deleteEmp',
            data: {depID: event.target.name},
            type: 'POST'
        });
        return deleteEmp;
    };
/*

    editDep() {
        let editDep = $.ajax({
            url: '/editDepartment',
            //dataType: 'json',
            data: {depID: event.target.name},//
            type: 'get'
        });
        return editDep;
    }

    saveDepartment() {
        let id = $('#id').val();
        if(typeof undefined == id) {
            id = null;
        }
        let name =  $('#name').val();
        let saveDepartment = $.ajax({
            data: {id: id, name: name},
            url: '/depSave',
            type: "POST"
        });
        return saveDepartment;
    };*/

}