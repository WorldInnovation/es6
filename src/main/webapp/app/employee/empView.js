import jQuery from "jquery";
import "./empController";

window.$ = window.jQuery = jQuery;

export default class EmpView {

    constructor() {

    }

    displayEmployees(response,depID) {
        const body = $('#content');
        body.empty();
        const table = $('<table>');
        table.append($('<th>').append($('<b>').text(' ID ')));
        table.append($('<th>').append($('<b>').text(' FirstName ')));
        table.append($('<th>').append($('<b>').text(' SecondName ')));
        table.append($('<th>').append($('<b>').text(' Grade ')));
        table.append($('<th>').append($('<b>').text(' Birthday ')));
        table.append($('<th>').append($('<b>').text(' eMail ')));
        table.append($('<th>').append($('<b>').text('Edit')));
        table.append($('<th>').append($('<b>').text('Delete')));

        for (let i = 0; i < response.length; i++) {
            table.append(
                $('<tr>')
                    .append($('<td>').text(response[i].id))
                    .append($('<td>').text(response[i].firstName))
                    .append($('<td>').text(response[i].secondName))
                    .append($('<td>').text(response[i].grade))
                    .append($('<td>').text(response[i].birthday))
                    .append($('<td>').text(response[i].eMail))

                    .append($('<td>').append($('<button class="listener" value="employeeEdit" name="' + response[i].id + '" >Edit</button>')))
                    .append($('<td>').append($('<button class="listener" value="empDelete" name="' + response[i].id + '">Delete</button>')))
            );
        }
        table.append($('<tr>')
            .append($('<td>')
                .append($('<button class="listener" value="addEmployee" name="' + depID + '">New</button>')))
        );
        body.append(table);
    };


    editEmployeesForm(response){
        $("#content").empty();
        const firstParent = $('<form id="empSaveForm" method="post" action="" onsubmit = "return false"></form>');
        const row = $('<fildset></fildset>');
        row.append(' <legend>Employees form </legend>');
        row.append('<p> <label for="firstName">FirstName </label>' +
            '<input id="firstName" name="firstName" value="'+response.firstName+'" type="text"> ' +
            '</p>');
        row.append('<p> <label for="secondName">SecondName</label>' +
            '<input id="secondName" name="secondName" value="'+response.secondName+'" type="text"> ' +
            '</p>');
        row.append('<p> <label for="grade">Gade   </label>' +
            '<input id="grade" name="grade" value="'+response.grade+'" type="number"> ' +
            '</p>');
        row.append('<p> <label for="birthday">Birthday </label>' +
            '<input id="birthday" name="birthday" value="'+response.birthday+'" type="date"> ' +
            '</p>');
        row.append('<p> <label for="eMail">eMail </label>' +
            '<input id="eMail" name="eMail" value="'+ response.eMail+'" type="email"> ' +
            '</p>');
        row.append('<p> <input id="submit" class="submit" type="submit" value="Submit">' +
            '</p>');
        row.append('<input id="id" type="hidden" name="id" value="'+ response.id+'"/>' +
            '<input id="depID" type="hidden" name="depID" value="'+ response.depID+'"/>');

        firstParent.append(row);
        $('#content').append(firstParent);
    }


}