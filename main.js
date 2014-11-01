$(document).ready(function(){

	// ==== logic ====


	var content = [															// 10 pics.
									'pic1.png',
									'pic2.png',
									'pic3.png',
									'pic4.png',
									'pic5.png',
									'pic6.png',
									'pic7.png',
									'pic8.png',
									'pic9.png',
									'pic10.png'
								];

	var squares = document.getElementsByClassName('square');		// in this case 20 square slots where content can be placed.
	var takenSlots = [];

	var filledSlotsWithValues;
	
	

	function clearTakenSlots() {
		takenSlots = [];

		for (var i = 0; i < squares.length; i++) {
			takenSlots.push(null);
		};
	}

	function getRandomEmptySlot() {
			
			var result = Math.floor(Math.random() * squares.length);

			while(takenSlots[result] != null) {												// changed indexOF method to simply check if the index value I'm trying to place my content in is Null instead.
				result = Math.floor(Math.random() * squares.length);

			}
			
			return result;
	}

	
	function fillTwoRandomEmptySlots(card) {
		var slot1 = getRandomEmptySlot();
		var slot2 = getRandomEmptySlot();
		while (slot1 == slot2) { 										// THE BUG  was i had no validation so that slot2 NOT could have the same value as slot1 :D...
			slot2 = getRandomEmptySlot();
		}

		takenSlots[slot1] = card;
		takenSlots[slot2] = card;
	}

	function putFilledSlotsIntoHtml() {
		for (var i = 0; i < squares.length; i++) {
			squares[i]
			.getElementsByClassName('content')[0]
			.innerHTML = "<img src='pics/" + takenSlots[i] + "'" + "alt='" + takenSlots[i] + "'" + "/>";
		};
	}
	
	function startAndShuffleGame() {
		clearTakenSlots();
		
		for (var i = 0; i < content.length; i++) {
			fillTwoRandomEmptySlots(content[i]);
		};

		putFilledSlotsIntoHtml();

	}


	// ==== logic END ====  


	// =========================================================


	// ==== Interaction & effects ====

	// ==== Compare values ====

	
	function matchContent(pic1, pic2) {
		
		if ( $(pic1).find('img').first().attr('alt') == $(pic2).find('img').first().attr('alt') &&  
			$(pic1).attr('id') != $(pic2).attr('id') ) {
			return true;
		}
	}

	// ==== Compare values END ==== 

	var highscore;	
	$.get('highscore.json', function(data) {
		$('#highscore').text(data.highscore);
		highscore = data.highscore;
	});

	$('#start-button').on('click', function() {		// init click	
		
		$('.square').off('click') 		// reset eventHandlers for square.on(click)

		startAndShuffleGame();		// init gameboard logic

		var completedSlots = [];
		var twoActiveSlots = [];

		var totalClicksCounter = 0;
		$('#click-counter').text(totalClicksCounter);

		
		$('.content').hide();	// visual init on gameboard
		$('.row').fadeOut(2);
		$('.row').fadeIn(800);

		$('.square').on('click', function(){	// code below handles click logic

			var activeSlot = this;
			
			$(completedSlots).show();
			

			if ( completedSlots.length == squares.length ) {		//if completedSlots is full, AKA game is done, do nothing.

				$('square').off('click');

			}else if ( completedSlots.indexOf(activeSlot) != -1  )  {		// if completedSlots is empty or clicked square is not in completedSlots
				
				$('squares').off('click');
				

			}else if (twoActiveSlots.indexOf(activeSlot) == 0) {   // if clicked is already loaded into twoActiveSlots, do nothing

				$('squares').off('click');

			}else if ( $(activeSlot).hasClass('delayed') ){			// if delay fadeout is in progress and you try to press the same square during fadeOut, do nothing.
				
				$('squares').off('click');

			} else { 	

				totalClicksCounter++;							// increment clicks
				$('#click-counter').text(totalClicksCounter);	

				$(this).find('.content').addClass('selected');

				$(this).find('.content').show();
				
				if ( twoActiveSlots.length == 0) { 		// if this is the first valid click for comparison, push into twoActiveslots

					$(activeSlot).attr('id', 'item1');
					twoActiveSlots.push(activeSlot);

				}else if (twoActiveSlots.length == 1 ) {	// if this is second valid click for comparison, push into twoActiveslots
					
					$(activeSlot).attr('id', 'item2');
					twoActiveSlots.push(activeSlot);

					if ( matchContent(twoActiveSlots[0], twoActiveSlots[1]) && twoActiveSlots.indexOf(activeSlot) != -1) {  // compare, was a match.
							
							completedSlots = completedSlots.concat(twoActiveSlots);
							twoActiveSlots = [];
							$('.content').removeClass('selected');
							$('.content').find('img').attr('id', null);
						
					}else {		// compare, was not a match. 							

						twoActiveSlots = [];
						$('.selected').delay(400).fadeOut(300);
						$(activeSlot).attr('id', null);
						$(activeSlot).addClass('delayed');
						$('.content').removeClass('selected');
						setTimeout(function() {
							$(activeSlot).removeClass('delayed');
						}, 800);
						

					}
				}else {
					twoActiveSlots = [];
					console.log("something went wrong :(");

				
				}

				if (completedSlots.length == squares.length) {  // all slots have been shown and game is done.

					if ( highscore == 0 || totalClicksCounter < highscore ) {		// set highscore
						
						$.post('handle-highscore.php', {highscore: totalClicksCounter}, function() {


						});
						$.get('highscore.json', function(data) {
							highscore = data.highscore;
							$('#highscore').text(data.highscore);
						});
					}
					
					$('.totalClicksCounter').text(totalClicksCounter); // show victory screen
					$('.victory-page').delay(600).fadeIn(700);

				}
			}
		});
	});

	$('.victory-page').click(function() { //click to remove victory overlay.
		$('.victory-page').hide();
	});

});



