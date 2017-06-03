export default class EmpService {

    getAllEmp(depID) {
        //console.log(event.target.name);
        let employeesList =
            $.ajax({
                url: "/employeesList",
                data: {depID: depID},
                type: "GET"
            });
        return employeesList;
    };

    deleteEmp(id) {
        let deleteEmp = $.ajax({
            url: '/deleteEmp',
            data: {empID: id},
            type: 'POST'
        });
        return deleteEmp;
    };

    editEmp(depID, id){
        let editEmp = $.ajax({
            url:'/employeeEdit',
            data: {
                depID: depID,
                empID: id
            },
            type:'GET'
        });
        return editEmp;
    };

 /*
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