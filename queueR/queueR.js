//To use, copy the code below and paste it in the 'Console' tab of Developer Tools in Chrome or Firefox.

// var iframe = document.getElementById('ext-comp-1005');

// var x = iframe.contentDocument.getElementsByClassName("refreshListButton")[0].id;

// function qRefresh() {
// 	iframe.contentDocument.getElementById(x).dispatchEvent(new MouseEvent("click"));
// }

// qRefresh();

// setInterval(function() {
// 	qRefresh()}, 30000)





window.onload = function () { 

	var iframe = document.getElementById('ext-comp-1005');

	var x = iframe.contentDocument.getElementsByClassName("refreshListButton")[0].id;

	function qRefresh() {
		iframe.contentDocument.getElementById(x).dispatchEvent(new MouseEvent("click"));
	}

	qRefresh();

	setInterval(function() {
		qRefresh()}, 30000)

 }