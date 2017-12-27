// angular app
var chordFinder = angular.module('chordFinder', []);


chordFinder.controller('chordFinderController', function ($scope){
	//$scope.chord = "C Major 9";
	//$scope.$apply();
});

//when key is clicked, print letter to console
$(".key").click(function(){
	console.log($(this).attr('id'));
})