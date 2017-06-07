import jQuery from "jquery";
import "jquery-validation";
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
            '<input id="firstName" name="firstName" value="" type="text" class = "empForm"> ' +
            '</p>');
        row.append('<p> <label for="secondName">SecondName</label>' +
            '<input id="secondName" name="secondName" value="" type="text" class = "empForm"> ' +
            '</p>');
        row.append('<p> <label for="grade">Gade   </label>' +
            '<input id="grade" name="grade" value="" type="number" class = "empForm"> ' +
            '</p>');
        row.append('<p> <label for="birthday">Birthday </label>' +
            '<input id="birthday" name="birthday" value="" type="date" class = "empForm"> ' +
            '</p>');
        row.append('<p> <label for="eMail">eMail </label>' +
            '<input id="eMail" name="eMail" value="" type="email" class = "empForm"> ' +
            '</p>');
        row.append('<p> <input id="submit" class="submit" type="submit" value="Submit" class = "empForm">' +
            '</p>');
        row.append('<input id="id" type="hidden" name="id" value=""/>' +
            '<input id="depID" type="hidden" name="depID" value="'+ response.depID+'"/>');

        firstParent.append(row);
        $('#content').append(firstParent);

        if ($.isNumeric(response.id ))
        {
            $('#id').val(response.id);
            $('#firstName').val(response.firstName);
            $('#secondName').val(response.secondName);
            $('#grade').val(response.grade);
            $('#birthday').val(response.birthday);
            $('#eMail').val(response.eMail);
        }
        else{   $('#id').val(null);
        }
        this.validEmployee();
    }

    validEmployee(){
        $('#empSaveForm').validate({
            rules: {
                firstName: {
                    required: true,
                    minlength: 2
                },
                secondName: {
                    required: true,
                    minlength: 2
                },
                grade: {
                    required: true,
                    number: true,
                    max: 10
                },
                eMail: {
                    required: true,
                    email: true
                }
            },
            messages: {
                firstName: "Enter your firstname min 2 chars",
                secondName: "Enter your secondname min 2 chars",
                grade: "Enter a valid number",
                eMail: "Enter correct email"
            },
            submitHandler: () => {
                $.ajax({
                    url: '/empSave',
                    type: 'post',
                    dataType: 'json',
                    //data: $("#empSaveForm").serialize(),
                    data: {
                        depID: depID,
                        id:id,
                        firstName:$('#firstName').val(),
                        secondName:$('#secondName').val(),
                        grade:$('#grade').val(),
                        birthday:$('#birthday').val(),
                        eMail:$('#eMail').val()
                    },
                    success:  () => {
                        alert('Employee  saved');
                    },
                    error:  () =>{
                        alert('Employee not save');
                    }
                });
            }
        });
    }


}