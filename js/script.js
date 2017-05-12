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

	if (source === "office") {
		generateOfficeQuote();
	} else {
		generateInternetQuote();
	}	
});

var insertNewQuote = function(myQuote, myAuthor){
	$('#main-blockquote').html("\"" + myQuote + "\"");
	$('#author-box').html('-- ' + myAuthor);
}

var getRandomArbitrary = function(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}


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


var generateInternetQuote = function(){
	var number = getRandomArbitrary(1, 99999);
	
	$.ajax({
		url: "http://api.forismatic.com/api/1.0/?",
		dataType: "jsonp",
		data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
		success: function( response ) {
			var myQuote = response.quoteText;
			var myAuthor = response.quoteAuthor;
			if(response.quoteAuthor === ''){
				myAuthor = 'Unknown';
			}
			insertNewQuote(myQuote, myAuthor);
		}
	});
	
}

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

// Generate quote from the office
var generateOfficeQuote = function(){
	var number = getRandomArbitrary(1, 24);
	console.log("number: " + number);
	$.getJSON('https://leofofeo.github.io/random-quote-machine/js/office.json', function(json){

		var myStr = JSON.stringify(json);
		var myObj = JSON.parse(myStr);
		var myQuote = myObj[number]["text"];
		var myAuthor = myObj[number]["author"];
		
		insertNewQuote(myQuote, myAuthor);
	});
}

////////// End Office Functionality ////////////


////////// Twitter Functionality ///////////////



////////// End Twiter Functionalityt  //////////


///////// CORS Methods ////////////////


///////// End CORS Methods ////////