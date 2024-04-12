function newItem() {

//Adds new item to the list
let li = $('<li></li>');
let inputValue = $('#input').val();
li.append(inputValue);

if (inputValue === '') {
    alert('You must write something');
} else {
    $('#list').append(li);
}


$(window).keydown(function(e) {
    //Enter key holds the value of 13
    if (e.keyCode === 13) {
        $('#list').append(li);
        console.log('Form submitted');
    }
})

//Crossing out an item from the list of items
function crossOut() {
    li.toggleClass('strike');
}

li.on('dblclick', function crossOut() {
    li.toggleClass('strike');
});

//Adding the delete button 'X'
let crossOutButton = $('.delete').append(document.createTextNode('X'));
li.append(crossOutButton);

crossOutButton.on('click', deleteListItem);
//Adding class delete (display: none) from css
function deleteListItem() {
    li.addClass('delete');
}

//reordering the items
$('#list').sortable();
}

// $(document).ready(() => {
//     $('#input').on('submit', () => {
//         return false;
//     });
// });

// $('#input').keypress((e) => {

//     //Enter key corresponds to the number 13
//     if (e.which === 13) {
//         // $('#list').append(li);
//         $('#input').submit();
//         console.log('form submitted');
//     }
// })

