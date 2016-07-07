


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
	'Reading: Fiction/Poetry', 
	'Performing', 
	'Writing: Business Ideas', 
	'Designing: Startup/ Experiment', 
	'Reading: Startups', 
	'Editing: Nonfiction', 
	'Coding'], 
	['Writing: Jokes', 
	'Booking', 
	'Running', 
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
	'Shipping: Special Events' ],
	['Writing: Fans/Blog',
	'Teaching',
	'Shipping: Record Audio',
	'Gary Floater'],
	['Meditating']

	);

var users = [{user1,}];
