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

    delete(depID) {
        let deleteDep = $.ajax({
            url: '/deleteDep',
            data: {depID: depID},
            type: 'POST'
        });
        return deleteDep;
    };

    editDepartment(depID) {
        let editDepartment = $.ajax({
            url: '/editDepartment',
            data: {depID: depID},
            type: 'POST'
        });
        return editDepartment;
    }

    depSave(depID, name) {
        let depSave = $.ajax({
            url: '/depSave',
            data: {depID: depID, name: name},
            type: 'POST'
        });
        return depSave;
    }


}