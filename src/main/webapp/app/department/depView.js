

import jQuery from "jquery";

import './depController';

window.$ = window.jQuery = jQuery;

export default class DepView{

   constructor(){
      let displayDepartments;
   }
    //displayDepartments =  function (response)
 displayDepartments  (response)  {
    let body = $('#content');
    body.text('');
    let table = $('<table>');
    table.append($('<td>').append($('<b>').text('Department')));
    table.append($('<td>').append($('<b>').text('Select')));
    table.append($('<td>').append($('<b>').text('Edit')));
    table.append($('<td>').append($('<b>').text('Delete')));

    for (let i = 0; i < response.length; i++) {
    table.append(
        $('<tr>')
.append($('<td>').text(response[i].name))
.append($('<td>').append($('<button class="listener" value="deleteDepartment" name="' + response[i].id + '">Delete</button>')))
.append($('<td>').append($('<button class="listener" value="updateDepartment" name="' + response[i].id + '" >Update</button>')))
.append($('<td>').append($('<button class="listener" value="showAllEmployees" name="' + response[i].id + '">Employees</button>')))
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


