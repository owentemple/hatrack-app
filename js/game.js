$(document).ready(function() {
    $('#dailyButton').click(function() {
		daily(); 
    });
    $('#weeklyButton').click(function() {
    	weekly(); 
    });
    $('#monthlyButton').click(function() {
    	monthly(); 
    });
    $('#myonoffswitch').change(function() {
    	switchTest();
    });
    $('#priorities').hide();
    $('.habit').click(function() {
    	var nextHat = $('img', this).attr('title');
    	var destinationBox = $('.box-5',this);
    	dragHatSession(nextHat, "daily");
    	if (/Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent) ) {
    		$('.box-1', this).appendTo(destinationBox);
		}
    });    
    // Tooltip only Text
	$('.masterTooltip').hover(function(){
	        // Hover over code
	        var title = $(this).attr('title');
	        $(this).data('tipText', title).removeAttr('title');
	        $('<p class="tooltip"></p>')
	        .text(title)
	        .appendTo('body')
	        .fadeIn('slow');
	}, function() {
	        // Hover out code
	        $(this).attr('title', $(this).data('tipText'));
	        $('.tooltip').remove();
	}).mousemove(function(e) {
	        var mousex = e.pageX + 20; //Get X coordinates
	        var mousey = e.pageY + 10; //Get Y coordinates
	        $('.tooltip')
	        .css({ top: mousey, left: mousex })
	});
});

function switchTest () {
	if(document.getElementById('myonoffswitch').checked) {
	    maxTimer = maxTimerNormal;
	    console.log("Normal");
	} else {
	    maxTimer = maxTimerMini;
	    console.log("Mini");
	}	
}




function daily () {
	$( "#logTitle" ).append(" for "+ today);
	if (dailyBucket.length <= 0) {
		introduction(); 
	} else {
		hatSession(dailyBucket, "daily");
	}
}

function weekly () {
	if (weeklyBucket.length <= 0) {
		setupHats("weekly"); 
	} else {
		hatSession(weeklyBucket, "weekly");
	}
}

function monthly () {
	if (monthlyBucket.length <= 0) {
		setupHats("monthly"); 
	} else {
		hatSession(monthlyBucket, "monthly");
	}
}


var score = 0;

var dailyBucket = [];
var weeklyBucket = [];
var monthlyBucket = [];

var completedDailyHats = [];
var completedWeeklyHats = [];
var completedMonthlyHats = [];

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
today = mm+'/'+dd+'/'+yyyy;

var maxTimerNormal = 30; //when switched back from mini to normal, the highest timer setting
var maxTimerMini = 5; //mini mode highest timer setting
var maxTimer = 30; //default highest timer setting



function User (firstName, lastName, email, password, dailyHats, weeklyHats, monthlyHats, healthHats) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.email = email;
	this.password = password;
	this.dailyHats = dailyHats;
	this.weeklyHats = weeklyHats;
	this.monthlyHats = monthlyHats;
	healthHats = healthHats;
}



var user1 = new User (
	'Owen', 
	'Temple', 
	'owentemple@gmail.com', 
	'colgate1', 
	['Writing: Flow', 
	'Listening', 
	'Teaching',
	'Reading: Fiction/Poetry', 
	'Communicating',
	'Performing', 
	'Designing: Startup/ Experiment', 
	'Reading: Startups', 
	'Editing: Nonfiction', 
	'Coding',
	'Running',], 
	['Writing: Jokes', 
	'Booking', 
	'Financial/Budgeting', 
	'Planning/Processing',
	'Writing: Compose',
	'Performing: Learn Music Theory',
	'Performing: Learn New Song/Chord',
	'Shipping: Record Video',
	'Shipping: Send/ Post Content',
	'Marketing: Coyote/MD',
	'Networking',
	'Typing',
	'Drawing',
	'Watching: Standup',
	'Watching: Story',
	'Writing: Business Ideas', 
	'Shipping: Special Events' ],
	['Writing: Fans/Blog',
	'Shipping: Record Audio',
	'Gary Floater']

	);


var user2 = new User (
	'Owen', 
	'Temple', 
	'owentemple@gmail.com', 
	'colgate2', 
	['Creativity', 
	'Curiosity', 
	'Judgement',
	'Love of Learning', 
	'Perspective',
	'Bravery', 
	'Perseverance', 
	'Honesty', 
	'Zest'
	], 
	['Love',
	'Kindness',
	'Social Intelligence',
	'Teamwork',
	'Fairness',
	'Leadership',
	'Forgiveness',
	'Humility',
	'Prudence',
	'Self-Regulation',
	'Appreciation of Beauty and Excellence',
	'Gratitude',
	'Hope',
	'Humor',
	'Spirituality'],
	[]

	);


var strengths = [
	'Creativity', 
	'Curiosity', 
	'Judgement',
	'Love of Learning', 
	'Perspective',
	'Bravery', 
	'Perseverance', 
	'Honesty', 
	'Zest', 
	'Love',
	'Kindness',
	'Social Intelligence',
	'Teamwork',
	'Fairness',
	'Leadership',
	'Forgiveness',
	'Humility',
	'Prudence',
	'Self-Regulation',
	'Appreciation of Beauty and Excellence',
	'Gratitude',
	'Hope',
	'Humor',
	'Spirituality'
	];

function characterStrengthsAssign(bucket) {
		var ri = Math.floor(Math.random() * bucket.length);// Random Index position in the array
		var nextCS = bucket[ri]; // 
		bucket.splice(ri, 1); // Splice out 1 random element using the ri var
		alert('Medidate and act on the Character Strength of ' + nextCS +' today.');
	};


function loadHats(user) {
	dailyBucket = user.dailyHats;
	weeklyBucket = user.weeklyHats;
	monthlyBucket = user.monthlyHats;
	$("#priorities").show();
	alert('Welcome back ' + user.firstName +'! Your hats are on the rack. Use the buttons above.');

//Experimental alert on Character Strengths
	if (user.email == "owentemple@gmail.com") {
		characterStrengthsAssign(strengths);
	};

	(function(ko, $, undefined) {
	ko.bindingHandlers.flash = {
	    init: function(element) {
	        $(element).hide();
	    },
	    update: function(element, valueAccessor) {
	        var value = ko.utils.unwrapObservable(valueAccessor());
	        if (value) {
	            $(element).stop().hide().text(value).fadeIn(function() {
	                clearTimeout($(element).data("timeout"));
	                $(element).data("timeout", setTimeout(function() {
	                    $(element).fadeOut();
	                    valueAccessor()(null);
	                }, 3000));
	            });
	        }
	    },
	    timeout: null
	};

	var Student = function(id, name) {
	    this.id = id;
	    this.name = ko.observable(name);
	};

	var Table = function(id, students) {
	    this.students = ko.observableArray(students);
	    this.students.id = id;
	};

	var SeatingChartModel = function(tables, availableStudents) {
	    var self = this;
	    this.tables = ko.observableArray(tables);
	    this.availableStudents = ko.observableArray(availableStudents);
	    this.availableStudents.id = "Available Students";
	    this.lastAction = ko.observable();
	    this.lastError = ko.observable();
	    this.maximumStudents = 25;
	    this.isTableFull = function(parent) {
	        return parent().length < self.maximumStudents;
	    };

	    this.updateLastAction = function(arg) {
	        self.lastAction("Moved " + arg.item.name() + " from " + arg.sourceParent.id + " (seat " + (arg.sourceIndex + 1) + ") to " + arg.targetParent.id + " (seat " + (arg.targetIndex + 1) + ")");
	    };

	};

	var extraStudents = [
	    new Student(35, "Blank"),
	    new Student(36, "Blank"),
	    new Student(37, "Blank")
	];

	var initialTables = [
	    new Table("Daily Rack",  [
	        new Student(1, user.dailyHats[0]),
	        new Student(2, user.dailyHats[1]),
	        new Student(3, user.dailyHats[2]),
	        new Student(4, user.dailyHats[3]),
	        new Student(5, user.dailyHats[4]),
	        new Student(6, user.dailyHats[5]),
	        new Student(7, user.dailyHats[6]),
	        new Student(8, user.dailyHats[7]),
	        new Student(9, user.dailyHats[8]),
	        new Student(10, user.dailyHats[9]),
	        new Student(11, user.dailyHats[10])
	    ]),

	    new Table("Weekly Rack", [
	        new Student(12, user.weeklyHats[0]),
	        new Student(13, user.weeklyHats[1]),
	        new Student(14, user.weeklyHats[2]),
	        new Student(15, user.weeklyHats[3]),
	        new Student(16, user.weeklyHats[4]),
	        new Student(17, user.weeklyHats[5]),
	        new Student(18, user.weeklyHats[6]),
	        new Student(19, user.weeklyHats[7]),
	        new Student(20, user.weeklyHats[8]),
	        new Student(21, user.weeklyHats[9]),
	        new Student(22, user.weeklyHats[10]),
	        new Student(23, user.weeklyHats[11]),
	        new Student(24, user.weeklyHats[12]),
	        new Student(25, user.weeklyHats[13]),
	        new Student(26, user.weeklyHats[14]),
	        new Student(27, user.weeklyHats[15]),
	        new Student(28, user.weeklyHats[16])

	    ]),
	    new Table("Monthly Rack", [
	        new Student(29, user.monthlyHats[0]),
	        new Student(30, user.monthlyHats[1]),
	        new Student(31, user.monthlyHats[2]),
	        new Student(32, user.monthlyHats[3]),
	        new Student(33, user.monthlyHats[4]),
	        new Student(34, user.monthlyHats[5])

	    ]),

	];




	var vm = new SeatingChartModel(initialTables, extraStudents);

	ko.bindingHandlers.sortable.beforeMove = vm.verifyAssignments;
	ko.bindingHandlers.sortable.afterMove = vm.updateLastAction;

	ko.applyBindings(vm);
	})(ko, jQuery);


}


function introduction() {


	// introduction to game
	alert('For most of us, our life and work requires "wearing multiple hats", that is, there are multiple roles or task categories we need to perform on a daily basis.');
	alert('For example, some jobs require: Selling, Preparing Estimates, Providing Technical Support, and Expense Reporting.');
	alert('As another example, some other jobs require: Writing, Shipping, Booking, Reading.');
	alert('Think about the activities that should happen on a daily basis in your life - the "hats" you need to wear on a daily basis - to keep your life going smoothly.');
	alert('These "hats" or recurring activities usually end in "-ing", as in Emailing, Designing, etc. or they are project names');
	setupHats("daily");

}


function setupHats (frequency) {

	var question = '';

	var answer = prompt('What is the name of 1 hat that you need to wear on a ' + frequency + ' basis in your work? Examples: Coding, Writing, Selling');

	while (answer === null ) {
		throw new Error("You chose CANCEL, so the program will end. Come back again soon!");
	} 

	while (answer === "") {
		answer = prompt('Your entry was blank. What is the name of 1 hat that you need to wear on a ' + frequency + ' basis?');
	}
	
	if (frequency === "daily") {
		dailyBucket.push(answer);
		question = "What is another activity you should do every day? (To quit adding activities, type 'DONE')";
	} else if (frequency === "weekly") {
		weeklyBucket.push(answer);
		question = "What is another activity you should do every week? (To quit adding activities, type 'DONE')";
	} else if (frequency === "monthly") {
		monthlyBucket.push(answer);
		question = "What is another activity you should do every month? (To quit adding activities, type 'DONE')";
	}
		
	do {
		answer = prompt(question);
		while (answer === "undefined" || answer === null ) {
			throw new Error("That's not a valid activity, so the program will end. Come back again soon!");
		}
		while (answer === "") {
			answer = prompt("Your entry was blank. What is another activity you should do every month? (To quit adding activities, type 'DONE')");
		}


		if (answer.toUpperCase() === "DONE") {
			alert("Ok, got it. You're done entering your "+ frequency +" activities");
		} else {

			if (frequency === "daily") {
				dailyBucket.push(answer);
			} else if (frequency === "weekly") {
				weeklyBucket.push(answer);
			} else if (frequency === "monthly") {
				monthlyBucket.push(answer);
			}
		}
	} while (answer.toUpperCase() !== "DONE");
	if (frequency === "daily") {
		hatSession(dailyBucket, "daily");
	} else if (frequency === "weekly") {
		hatSession(weeklyBucket, "weekly");
	} else if (frequency === "monthly") {
		hatSession(monthlyBucket, "monthly");
	}

}	


	//run hat session by pulling random activity from hat
function hatSession(bucket, frequency) {
	
	var moreHat;
	var nextHat;
	var scoreUp;
	while (bucket.length > 0) {
		alert('Roll the dice to see which of your "hats" you will wear next.');
		var ri = Math.floor(Math.random() * bucket.length);// Random Index position in the array
		nextHat = bucket[ri]; // 
		bucket.splice(ri, 1); // Splice out 1 random element using the ri var
		var t = 0; //counter to count how many repeated sessions with the hat have occurred
		alert("Your next activity will be " + nextHat);
		var timerLength;
		do {
			alert('Roll the dice to see how long your next hat session will be.');
			if (t === 0) {
				timerLength = (Math.floor( Math.random() * maxTimer) + 1);	
			} else {
				timerLength = (Math.floor( Math.random() * maxTimerNormal) + 1);
			}
			alert("You rolled " + timerLength + ", so focus on " + nextHat + " for the next " + timerLength + " minutes. Click OK when done.");
			t ++;
			if((document.getElementById('myonoffswitch').checked) || t > 1) {
			    score +=5;
			    scoreUp = 5;
			} else {
			    score +=1;
			    scoreUp = 1;
			}
			console.log(nextHat);
			var elScore = document.getElementById('score');
			elScore.innerHTML = score;
			$( "#log" ).append( nextHat + " session of " + timerLength + " minutes complete, score increased by " + scoreUp + "</br>" );
	
			
			moreHat = prompt('Do you want to wear your ' + nextHat + ' hat for another session? Yes or No?');
			if (moreHat === null) {
					if (frequency === "daily") {
					completedDailyHats.push(nextHat);	
					console.log(completedDailyHats);
					$("#daily").append("<li>" + nextHat + "</li>");
					//movePicture(nextHat, ri);	
									
					} else if (frequency === "weekly") {
						completedWeeklyHats.push(nextHat);
						console.log(completedWeeklyHats);
						$("#weekly").append("<li>" + nextHat + "</li>");
					} else {
						completedMonthlyHats.push(nextHat);
						console.log(completedMonthlyHats);
						$("#monthly").append("<li>" + nextHat + "</li>");
					}
				
				throw new Error("You chose CANCEL, so the program will end. Come back again soon!");
			}


		} while (moreHat === 'YES'|| 
				 moreHat === 'Y' ||
				 moreHat === 'yes' ||
				 moreHat === 'y');

		if (frequency === "daily") {
			completedDailyHats.push(nextHat);	
			console.log(completedDailyHats);
			$("#daily").append("<li>" + nextHat + "</li>");
			//movePicture(nextHat, ri);
			
		} else if (frequency === "weekly") {
			completedWeeklyHats.push(nextHat);
			console.log(completedWeeklyHats);
			$("#weekly").append("<li>" + nextHat + "</li>");
		} else {
			completedMonthlyHats.push(nextHat);
			console.log(completedMonthlyHats);
			$("#monthly").append("<li>" + nextHat + "</li>");
		}
	} 
	alert("You've worn all your hats today, congratulations");
	alert("Your HatRack score today is " + score);
}


function dragHatSession(nextHat, frequency) {
  
  var moreHat;
  var scoreUp;
  var t = 0;
   
    alert("Your next activity will be " + nextHat);
    var timerLength;
    do {
      alert('Roll the dice to see how long your next hat session will be.');
      if (t === 0) {
        timerLength = (Math.floor( Math.random() * maxTimer) + 1);  
      } else {
        timerLength = (Math.floor( Math.random() * maxTimerNormal) + 1);
      }
      alert("You rolled " + timerLength + ", so focus on " + nextHat + " for the next " + timerLength + " minutes. Click OK when done.");
      t ++;
      if((document.getElementById('myonoffswitch').checked) || t > 1) {
          score +=5;
          scoreUp = 5;
      } else {
          score +=1;
          scoreUp = 1;
      }
      console.log(nextHat);
      var elScore = document.getElementById('score');
      elScore.innerHTML = score;
      $( "#log" ).append( nextHat + " session of " + timerLength + " minutes complete, score increased by " + scoreUp + "</br>" );
  
      
      moreHat = prompt('Do you want to wear your ' + nextHat + ' hat for another session? Yes or No?');
      if (moreHat === null) {
          if (frequency === "daily") {
          completedDailyHats.push(nextHat); 
          console.log(completedDailyHats);
          $("#daily").append("<li>" + nextHat + "</li>"); 
          
          } else if (frequency === "weekly") {
            completedWeeklyHats.push(nextHat);
            console.log(completedWeeklyHats);
            $("#weekly").append("<li>" + nextHat + "</li>");
          } else {
            completedMonthlyHats.push(nextHat);
            console.log(completedMonthlyHats);
            $("#monthly").append("<li>" + nextHat + "</li>");
          }
        throw new Error("You chose CANCEL, so the program will end. Come back again soon!");
      }


    } while (moreHat === 'YES'|| 
         moreHat === 'Y' ||
         moreHat === 'yes' ||
         moreHat === 'y');

    if (frequency === "daily") {
      completedDailyHats.push(nextHat); 
      console.log(completedDailyHats);
      $("#daily").append("<li>" + nextHat + "</li>"); 
      
    } else if (frequency === "weekly") {
      completedWeeklyHats.push(nextHat);
      console.log(completedWeeklyHats);
      $("#weekly").append("<li>" + nextHat + "</li>");
    } else {
      completedMonthlyHats.push(nextHat);
      console.log(completedMonthlyHats);
      $("#monthly").append("<li>" + nextHat + "</li>");
    }


}
  

//function movePicture (hat, i) {
	//console.log("function runs");	
	//var imageSelector = "#habit" + String(i);
	//var destinationBox = $(imageSelector).children("box-5");
	//$(imageSelector).children("box-1").appendTo(destinationBox);
   // }




