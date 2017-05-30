import jQuery from "jquery";
import "./depController";

window.$ = window.jQuery = jQuery;

export default class DepView {

    constructor() {

    }

    displayDepartments(response) {
        const body = $('#content');
        body.empty();
        const table = $('<table>');
        table.append($('<th>').append($('<b>').text(' ID ')));
        table.append($('<th>').append($('<b>').text('Department')));
        table.append($('<th>').append($('<b>').text('Select')));
        table.append($('<th>').append($('<b>').text('Edit')));
        table.append($('<th>').append($('<b>').text('Delete')));

        for (let i = 0; i < response.length; i++) {
            table.append(
                $('<tr>')
                    .append($('<td>').text(response[i].id))
                    .append($('<td>').text(response[i].name))
                    .append($('<td>').append($('<button class="listener" value="employeesList" name="' + response[i].id + '">Select</button>')))
                    .append($('<td>').append($('<button class="listener" value="editDepartment" name="' + response[i].id + '" >Edit</button>')))
                    .append($('<td>').append($('<button class="listener" value="deleteDep" name="' + response[i].id + '">Delete</button>')))
            );
        }
        table.append($('<tr>')
            .append($('<td>')
                .append($('<button class="listener" value="addDepartment" >Add</button>')))
        );
        body.append(table);
    };

    displayDepForm(response) {
        let body = $('#content');
        body.text('');
        body.append(
            $('<form id="departmentForm" >')
                .append(
                    $('<table>')
                        .append($('<tr>')
                            .append($('<td>').text('Name:'))
                            .append($('<td>')
                                .append($('<input type="text" id="name" name ="name"/>').val(response !== null ? response.name : ""))//value="' + response.name + '"
                                .append($('<input type="hidden" id="id" value="' + response.id + '"/>'))
                            )
                        )
                        .append($('<tr>')
                            .append($('<td>')
                                .append($('<button type="submit" id="saveDepartment" value="saveDepartment">Save</button>'))
                            )
                        )
                )
        );
        //this.validateDepartment();
    };


}


//-------------


