var rollSingleDice = function(){
    return Math.floor(Math.random()*6+1);
};

//make dies objects
var fiveDice=[
    {"id":"die1", "face":0, "reroll":true},
	{"id":"die2", "face":0, "reroll":true},
	{"id":"die3", "face":0, "reroll":true},
	{"id":"die4", "face":0, "reroll":true},
	{"id":"die5", "face":0, "reroll":true}
	];
console.log(fiveDice[1].id);
console.log(fiveDice[1]);
//gives value of 5 dies in array
var getFiveDice = function(){
	for(i=0; i<5;i++){
		var temp = rollSingleDice(); //gets a number from function
        fiveDice[i].face = temp;//assigns that new value to die
		console.log(fiveDice[i].face);//shows off
		}
	};
getFiveDice();//calling function
console.log(fiveDice[1]);//shows die2
console.log(fiveDice);//shows all dice





