$(function(){
    // Populate select inputs
    populateSelect('#ref1', lists.ref1);
    populateSelect('#ref2', lists.ref2);
    populateSelect('#ref3', lists.fer3);

    // Open list chooser
    $('.js-chooseLists').click(function(e){
        if(!($('.js-wrapper--listChooser').hasClass('open'))){
            $('.js-wrapper--listChooser').addClass('open');
            $(this).text('Hide lists');
        } else {
            $('.js-wrapper--listChooser').removeClass('open');
            $(this).text('Choose lists');
        }

        e.preventDefault();
    });
});

function randomise() {

	$('.random').animate({
		opacity: 0,
	}, 0, function() {
	});

	document.querySelector('#array1').innerHTML = getRandomArrayItem(lists['ref1'][$('#ref1').val()]['data']);
	document.querySelector('#array2').innerHTML = getRandomArrayItem(lists['ref2'][$('#ref2').val()]['data']);
	document.querySelector('#array3').innerHTML = getRandomArrayItem(lists['ref3'][$('#ref3').val()]['data']);

	$('.random').animate({
		opacity: 1,
	}, 500, function() {
	});

};

/* Helper functions
-------------------------------- */
function getRandomArrayItem(theArray){
    return theArray[Math.floor(Math.random() * theArray.length)];
}

function populateSelect(elementId, listOfLists){
    $.each(listOfLists, function(i, val){
        $(elementId).append('<option value="' + i + '">' + val.name + '</option>');
    });
}
