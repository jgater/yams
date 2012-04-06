// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
	var self = this;
    this.firstName = ko.observable("Bob");
    this.lastName = ko.observable("Builder");

    this.fullName = ko.computed(function() {
        return this.firstName() + " " + this.lastName();    
    }, this);

    this.capitalizeLastName = function() {
        var currentVal = this.lastName();        // Read the current value
        this.lastName(currentVal.toUpperCase()); // Write back a modified value
    };    

	//My dice run
	this.rollSingleDice = function(){
    	return Math.floor(Math.random()*6+1);
	};
	// creates 5 dies objects
	this.die1 ={
		face: ko.observable(0),
		reroll: ko.observable(true)
	};
	this.die2 ={
		face: ko.observable(0),
		reroll: ko.observable(true)
	};
	this.die3 ={
		face: ko.observable(0),
		reroll: ko.observable(true)
	};
	this.die4 ={
		face: ko.observable(0),
		reroll: ko.observable(true)
	};
	this.die5 ={
		face: ko.observable(1),
		reroll: ko.observable(true)
	};
	//declares array for storing 5 dies
	this.fiveDice = ko.observableArray([
    	self.die1, self.die2, self.die3, self.die4, self.die5
    ]);
	//populates array with 5 dies


	//supposedly gives a face value to all dice
	this.rollFiveDice = function(){
		for (i=0; i<5; i++) {
			var temp = self.rollSingleDice(); //gets a number from function
      		self.fiveDice()[i].face(temp);//assigns that new value to die
      		//parsing temp as variable to method ko.observable
			console.log(self.fiveDice()[i].face());//shows off
		};
	};

	













}

// Activates knockout.js
ko.applyBindings(new AppViewModel());