//JS and jQuery for RQM
$('document').ready(function(){
	$('#btn-internet').addClass('btn-primary');
	$('#btn-saved-quote').addClass('disabled');
});

// var savedQuote = {
// 	quote : '',
// 	author : '',
// 	source: ''
// }
////////// General Quote Functionality ////////////
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

// $('#btn-saved-quote').on('click', function(){
// 	getSavedQuote();
// });

var enableGetLastQuote = function(){
	if($('#btn-saved-quote').hasClass('disabled')){
		$('#btn-saved-quote').removeClass('disabled');
	}
}

var insertNewQuote = function(myQuote, myAuthor){
	$('#main-blockquote').html("\"" + myQuote + "\"");
	$('#author-box').html('-- ' + myAuthor);
}

var getRandomArbitrary = function(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

// var saveQuote = function(myQuote, myAuthor){
// 	savedQuote.quote = myQuote;
// 	savedQuote.author = myAuthor;
// 	if($('#btn-office').hasClass('btn-primary')){
// 		savedQuote.source = 'office';
// 	} else {
// 		savedQuote.source = 'internet';
// 	}
// }

// var getSavedQuote = function(){
// 	insertNewQuote(savedQuote.quote, savedQuote.author);
// 	if(savedQuote.source === "office"){
// 		$('#btn-office').addClass('btn-primary');
// 		$('#btn-internet').removeClass('btn-primary');
// 	} else {
// 		$('#btn-internet').addClass('btn-primary');
// 		$('#btn-office').removeClass('btn-primary');
// 	}
// }
////////// End General Quote Functionality ////////////


////////// The Internet Functionality ////////////

// Switch primary classes
$('#btn-internet').on('click', function(){
	if($('#btn-office').hasClass('btn-primary')){
		$('#btn-office').removeClass('btn-primary');
		generateInternetQuote();
	}

	if($('#btn-internet').hasClass('btn-primary')){
	} else {
		$('#btn-internet').addClass('btn-primary');
	}
});


var generateInternetQuote = function(){
	// enableGetLastQuote();
	var number = getRandomArbitrary(1, 99999);
	
	$.ajax({
		url: "https://api.forismatic.com/api/1.0/?",
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
		generateOfficeQuote();
	}

	if($('#btn-office').hasClass('btn-primary')){
	} else {
		$('#btn-office').addClass('btn-primary');
	}


});

// Generate quote from the office
var generateOfficeQuote = function(){
	enableGetLastQuote();
	var number = getRandomArbitrary(1, 24);
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