//JS and jQuery for RQM
$('document').ready(function(){
	$('#btn-internet').addClass('btn-primary');
});


////////// New Quote Functionality ////////////
$('#btn-new-quote').on('click', function(){

	var source = '';

	if ($('#btn-internet').hasClass('btn-primary')){
		source = 'internet';
	} else {
		source = 'office';
	}

	$.getJSON('https://leofofeo.github.io/random-quote-machine/js/office.json', function(json){

		var myObj = JSON.stringify(json);
		
		$('#test-blockquote').html(myObj);
	});

	console.log(source);
});

////////// End New Quote Functionality ////////////


////////// The Internet Functionality ////////////

// Switch primary classes
$('#btn-internet').on('click', function(){
	if($('#btn-office').hasClass('btn-primary')){
		$('#btn-office').removeClass('btn-primary');
	}

	if($('#btn-internet').hasClass('btn-primary')){
	} else {
		$('#btn-internet').addClass('btn-primary');
	}
});


////////// End Internet Functionality ////////////


////////// The Office Functionality ////////////

// Switch primary classes
$('#btn-office').on('click', function(){
	if($('#btn-internet').hasClass('btn-primary')){
		$('#btn-internet').removeClass('btn-primary');
	}

	if($('#btn-office').hasClass('btn-primary')){
	} else {
		$('#btn-office').addClass('btn-primary');
	}
});



////////// End Office Functionality ////////////


//Twitter Functionality