$(document).ready(function() {
    
    $("textarea").focus(function() {
    $(this).css({"height": "70px"})
    $("#tweet-controls").show();
    
    
  //   $("#char-count").html(textMAx)
  //   $(this).keyup(function() {  //targeting the char-count id.
	 // var count = $(this).val().length;
  //    var remaining = textMax - count;


  //    })



})
    $('textarea').keydown(function() {
			   var count  = $(this).val().length,
			   remaining = 140 - count; 

			$('#char-count').text(remaining);
		
			if(remaining <= 10) {
				$('#char-count').css('color', 'red');
			} else {
				$('#char-count').css('color', '#999');
			}

			if (count > 140) {
				$('#tweet-submit').attr('disabled', 'disabled');
			} else {
				$('#tweet-submit').attr('disabled', false);
			}
		})

    	$('#tweet-submit').click(function() {
		var tweetWords = $('.tweet-compose').val();
		var newTweet = $('.tweet').clone().eq(0);
		var myName = $('#myName').html();
		var picture = $('#twitterpic').attr('src');

		newTweet.find('.tweet-text').html(tweetWords);
		newTweet.find('.fullname').html(myName);
		newTweet.find('.username').html("@Ben");
		newTweet.find('.avatar').attr('src', picture);

		newTweet.prependTo('#stream');
		//$('#stream').prepend($(newTweet));  
		

		$('textarea').val('');
		$('#char-count').text("140");
	});
 





});