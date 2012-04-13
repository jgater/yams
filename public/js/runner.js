//create ko viewmodel for testing

viewModel = new AppViewModel();
$(function() {
	//tests just against the view model
	module("start condition view model tests");
		test("allNumbers length", function() {
			equal(viewModel.allNumbers.length, 6, "AllNumbers length");
		});
		test("allCombos length", function() {
			equal(viewModel.allCombos.length, 9, "AllCombos length");
		});

});