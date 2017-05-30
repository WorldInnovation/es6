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
        $("#content").empty();

        let body = $('#content');
        body.text('');
        body.append(
            $('<form id="departmentForm" onsubmit = "return false">')
                .append(
                    $('<table>')
                        .append($('<tr>')
                            .append($('<td>').text('depName:'))
                            .append($('<td>')
                                .append($('<input type="text" id="name" placeholder="Enter department" name ="name"/>').val(response.name !== null ? response.name : ""))
                                .append($('<input type="hidden" id="id" value="' + response.id + '"/>'))
                            )
                        )
                        .append($('<tr>')
                            .append($('<td>')
                                .append($('<input  type="submit" class="listener" id="depSave" value="depSave">Save</input>'))

                            )
                        )
                )
        );
        this.validateDepartment();
    };

    validateDepartment() {
        $('#departmentForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 5,
                    maxlength: 10,
                    remote: {
                        url: "/getDepName",
                        type: "POST",
                        data: {
                            id: () => {
                                return $('#id').val();
                            },
                            name: () => {
                                return $('#name').val();
                            }
                        }
                    }
                }
            },
            messages: {
                name: {
                    required: "Type name, please",
                    minlength: "Your password must be at least 5 characters long",
                    maxlength: "Your password must not be longer than 10 characters",
                    remote: "This name is already used!"
                }
            },
            submitHandler: () => {
                $( "#saveDepartment" ).addClass('listener').trigger( 'click' );
            }
        });
    };


}


//-------------
/*
 child.append('<input id="name" type="text" name="name" placeholder="Enter department" value=""/><br>')
 child.append('<input id="id" type="hidden" name="id"  value=""/><br>');
 child.append('<input id="butSaveDep" type="submit" value="OK">');
 //--
 const rowForm = $('<form id="depSave" onsubmit = "return false">');
 const child = $('<div></div>');
 child.append($('<input type="text" id="name" placeholder="Enter department" name ="name"/>').val(response !== null ? response.name : ""))
 append('<input id="name" type="text" name="name" placeholder="Enter department" value=""/><br>')
child.append('<input id="id" type="hidden" name="id"  value="' + response.id + '"/><br>');
child.append('<input id="butSaveDep" class="listener" type="submit" value="OK">');
rowForm.append(child);
rowForm.append('</form>');
$('#content').append(rowForm);
 */

