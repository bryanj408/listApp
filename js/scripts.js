function newItem() {

//Adds new item to the list
let li = $('<li></li>');
let inputValue = $('#input').val();
li.append(inputValue);

if (inputValue === '') {
    alert('You must write something');
} else {
    $('#list').append(li);
    //clears input field after selecting 'Add' button
    $('#input').val(''); 
}

//Crossing out an item from the list of items
function crossOut() {
    li.toggleClass('strike');
}

li.on('dblclick', function crossOut() {
    li.toggleClass('strike');
});

//Adding the delete button 'X'
let crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);

crossOutButton.on('click', deleteListItem);
//Adding class delete (display: none) from css
function deleteListItem() {
    li.addClass('delete');
}

//reordering the items
$('#list').sortable();
$('#list').disableSelection();
}

// //keydown function to listen for enter key
// 	$(document).ready(function() {
// 		$('#input').keydown(function(e) {
	
// 		//initialized variable and set as undefined
// 		let inputValue;
	 
// 		if (inputValue === '') {
// 				alert("You must enter something");
// 		} else {
// 				//Enter key holds the value of 13
// 				if (e.keyCode === 13) {
// 				let li = `<li>${$(this).val()}</li>`;
// 				$('#list').append(li);
// 				console.log('Form submitted');
	
// 				e.preventDefault(); 
// 				//clears input field after hitting enter
// 				$('#input').val('');
// 				}
// 		}
// 		})
// 	});

        