$(function(){
    // Populate select inputs
    populateSelect('#ref1', lists.ref1);
    populateSelect('#ref2', lists.ref2);
    populateSelect('#ref3', lists.ref3);

});


function randomise() {

    $('.random').animate({
        opacity: 0,
    }, 0, function() {
    });

    // document.querySelector('#ref1').innerHTML = getRandomArrayItem(lists['ref1'][$('#ref1').val()]['data']);
    // document.querySelector('#ref2').innerHTML = getRandomArrayItem(lists['ref2'][$('#ref2').val()]['data']);
    // document.querySelector('#ref3').innerHTML = getRandomArrayItem(lists['ref3'][$('#ref3').val()]['data']);

    l = getRandomArrayItem(lists['ref1'][$('#ref1').val()]['data']);

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
