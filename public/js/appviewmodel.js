// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
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
	this.rollSingleDice = ko.computed(function(){
    	return Math.floor(Math.random()*6+1);
	});
	//printout results -->in html



}

// Activates knockout.js
ko.applyBindings(new AppViewModel());