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
            data: {depID: event.id},
            type: 'POST'
        });
        return deleteDep;
    };

    editDep() {
        let editDep = $.ajax({
            url: '/editDepartment',
            dataType: 'json',
            data: {depID: 79},//event.target.name
            type: 'get'
        });
        return editDep;
    }
    /*url: "/editDepartment",
     type: "GET",
     dataType: 'json',
     data: {depID: depID},*/

    depSave(depID, name) {
        let depSave = $.ajax({
            url: '/depSave',
            data: {depID: depID, name: name},
            type: 'POST'
        });
        return depSave;
    }


}