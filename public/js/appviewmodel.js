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
	this.fivedice = ko.observableArray();
	//populates array with 5 dies
	this.getfivedice = ko.computed(function(){
		for(i=0; i<5;i++){
			self.fivedice.push(self.rollSingleDice()); 
		}
	}
	);




}

// Activates knockout.js
ko.applyBindings(new AppViewModel());