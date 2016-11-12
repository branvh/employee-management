
//firebase database key and creation
var config = {
    apiKey: "AIzaSyCfj9gCrj_ataltYC6fK18TJRU6-xCflh0",
    authDomain: "employeefirebase.firebaseapp.com",
    databaseURL: "https://employeefirebase.firebaseio.com",
    storageBucket: "employeefirebase.appspot.com"
};

firebase.initializeApp(config);

var database = firebase.database();

var employeeList = database.ref("employeeData");

// var addEmployee = employeeList.push();
//on page load, do an ajax call to update the domm as the callback

// Whenever a user clicks the click button
$("#submit-record").on("click", function() {

	// Get the input values
	name = $('#employee-name').val().trim();
	role = $('#role-name').val().trim();
	startDate = $('#start-date').val().trim();
	rate = $('#monthly-rate').val().trim();

	employeeList.push({
		name: name,
		role: role,
		startDate: startDate,
		rate: rate,
		dateAdded: firebase.database.ServerValue.TIMESTAMP,
	});

	// Return False to allow "enter"
	return false;
});
//get child data back
employeeList.on("child_added",function(childSnapshot){
	console.log(childSnapshot.val().name);
	console.log(childSnapshot.val().role);
	console.log(childSnapshot.val().startDate);
	console.log(childSnapshot.val().rate);

	$('tbody').append('<tr><td>' + childSnapshot.val().name + '</td><td>' + childSnapshot.val().role +'</td><td>' + childSnapshot.val().startDate + '</td><td>' + childSnapshot.val().startDate + '</td><td>' + childSnapshot.val().rate + '</td><td>' + childSnapshot.val().startDate + '</td></tr>')




})

