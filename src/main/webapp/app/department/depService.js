export default class DepService {
    getAll() {
        let departmetList =
            $.ajax({
                type: "GET",
                url: "/deps",
                dataType: 'json',
            });
        return departmetList;
    };

    deleteDep() {
        let deleteDep = $.ajax({
            url: '/deleteDep',
            data: {depID: event.target.name},
            type: 'POST'
        });
        return deleteDep;
    };

    editDep() {
        let editDep = $.ajax({
            url: '/editDepartment',
            data: {depID: event.target.name},//
            type: 'get'
        });
        return editDep;
    }
    /*url: "/editDepartment",
     type: "GET",
     dataType: 'json',
     data: {depID: depID},*/
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
    };

/*    depSave() {
        let depSave = $.ajax({
            url: '/depSave',
            dataType: 'json',
            data: {depID: event.target.id, name: event.target.name},
            type: 'POST'
        });
        return depSave;
    }*/


}