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

	//declares array for storing 5 dies
	this.fiveDice = ko.observableArray([
    {"id":"die1", "value":0, "reroll":true},
	{"id":"die2", "value":0, "reroll":true},
	{"id":"die3", "value":0, "reroll":true},
	{"id":"die4", "value":0, "reroll":true},
	{"id":"die5", "value":0, "reroll":true}
	]);
	//populates array with 5 dies


	//NOW, does it replace all object with 1 value --> it does :(
	//OR how the f** does it knwo where to put that number?
	this.getFiveDice = function(){
		for(i=0; i<5;i++){
			var temp = self.rollSingleDice(); //calls for random value
			self.fiveDice.splice(i,1,temp);//adds value to value prop of die obj
			console.log(self.fiveDice()[i]);//prints to screen
		}
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