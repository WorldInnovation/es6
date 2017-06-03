import jQuery from "jquery";
import "./empController";

window.$ = window.jQuery = jQuery;

export default class EmpView {

    constructor() {

    }

    displayEmployees(response) {
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

                    .append($('<td>').append($('<button class="listener" value="editDepartment" name="' + response[i].id + '" >Edit</button>')))
                    .append($('<td>').append($('<button class="listener" value="deleteDep" name="' + response[i].id + '">Delete</button>')))
            );
        }
        table.append($('<tr>')
            .append($('<td>')
                .append($('<button class="listener" value="addEmployee" >New</button>')))
        );
        body.append(table);
    };

    editEmployeesForm(response){

        $("#content").empty();
        const firstParent = $('<form id="empSaveForm" method="post" action="" onsubmit = "return false"></form>');
        var row = $('<fildset></fildset>');
        row.append(' <legend>Employees form </legend>');
        row.append('<p> <label for="firstName">FirstName </label>' +
            '<input id="firstName" name="firstName" type="text"> ' +
            '</p>');
        row.append('<p> <label for="secondName">SecondName</label>' +
            '<input id="secondName" name="secondName" type="text"> ' +
            '</p>');
        row.append('<p> <label for="grade">Gade   </label>' +
            '<input id="grade" name="grade" type="number"> ' +
            '</p>');
        row.append('<p> <label for="birthday">Birthday </label>' +
            '<input id="birthday" name="birthday" type="date"> ' +
            '</p>');
        row.append('<p> <label for="eMail">eMail </label>' +
            '<input id="eMail" name="eMail" type="email"> ' +
            '</p>');
        row.append('<p> <input id="submit" class="submit" type="submit" value="Submit">' +
            '</p>');
        row.append('<input id="id" type="hidden" name="id" value=""/>' +
            '<input id="depID" type="hidden" name="depID" value=""/>');

        firstParent.append(row);
        $('#content').append(firstParent);
    }





}