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

    delete(event) {
        let deleteDep = $.ajax({
            url: '/deleteDep',
            data: {depID: event.id},
            type: 'POST'
        });
        return deleteDep;
    };

    editDepartment(event) {
        let editDepartment = $.ajax({
            url: '/editDepartment',
            data: {depID: event.id},
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