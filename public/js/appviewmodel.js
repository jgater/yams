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
    	self.die1.face, self.die2.face, self.die3.face, self.die4.face, self.die5.face
    ]);
	//populates array with 5 dies


	//supposedly gives a face value to all dice
	this.getFiveDice = function(){
		for (i=1; i<6; i++) {
			this.temp = "self.die"+i; //this.temp = name of die
			console.log(this.temp);
			console.log(self.die1.face());
			this.temp2 = self.rollSingleDice(); //temp2 = number
			console.log(this.temp2);
			this.temp.face = this.temp2; //gives value of die to its face
			console.log(this.temp.face());
		};
	};

//the following works in pure js
//var getFiveDice = function(){
//	for(i=0; i<5;i++){
//		var temp = rollSingleDice(); //gets a number from function
//      fiveDice[i].value = temp;//assigns that new value to die
//		console.log(fiveDice[i].value);//shows off
//		}
//	};

}

// Activates knockout.js
ko.applyBindings(new AppViewModel());