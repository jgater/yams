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
	//printout results -->in html
	//declares array for storing 5 dies
	self.fivedice = ko.observableArray();
	self.die1 = ko.observable();
	//populates array with 5 dies
	this.getfivedice = function(){
		for(i=0; i<5;i++){
			var temp = self.rollSingleDice(); 
			self.fivedice.splice(i,1,temp)
			console.log(self.fivedice()[i]);
		}
		self.die1(self.rollSingleDice());
	};




}

// Activates knockout.js
ko.applyBindings(new AppViewModel());