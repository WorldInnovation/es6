

import jQuery from "jquery";

import './depController';

window.$ = window.jQuery = jQuery;

export default class DepView{

   constructor(){

   }
    //displayDepartments =  function (response)
 displayDepartments  (response)  {
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


}



//-------------


