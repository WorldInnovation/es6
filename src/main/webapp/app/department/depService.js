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

    deleteDep(id) {
        let deleteDep = $.ajax({
            url: '/deleteDep',
            data: {depID: id},
            type: 'POST'
        });
        return deleteDep;
    };

    editDep(id) {
        let editDep = $.ajax({
            url: '/editDepartment',
            data: {depID: id},//
            type: 'GET'
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
    };

}