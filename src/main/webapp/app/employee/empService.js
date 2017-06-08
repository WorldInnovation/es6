export default class EmpService {

    getAllEmp(depID) {
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
            url: '/empDelete',
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

    employeeSave(depID, id) {
        let employeeSave = $.ajax({
            url:'/empSave',
            data: {
             depID: depID,
             id:id,
             firstName:$('#firstName').val(),
             secondName:$('#secondName').val(),
             grade:$('#grade').val(),
             birthday:$('#birthday').val(),
             eMail:$('#eMail').val()
             },
            type: 'POST'
        });
        return employeeSave;
    };

}