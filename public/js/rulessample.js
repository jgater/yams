<!-- inside view model -->

this.free = [];


for (i in rulesArray) {
	self.free.push( new td(rulesArray[i])  );

}


<!-- outside view model -->

var td = function(rule) {
	this.isSet = ko.observable(false);
	this.result = ko.observable(" ");
	this.rules = rule;

}


var rulesArray = [
	//this for all 1s
	function(){
	//calculate all 1s score

	},
	//all 2s
	function(){
	},
]
