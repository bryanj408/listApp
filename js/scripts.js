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

	li.on('dblclick dbltap', function crossOut() {
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

	$('#list').sortable({
		delay: 200
	})

}


        
