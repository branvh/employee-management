
//firebase database key and creation
var config = {
    apiKey: "AIzaSyCfj9gCrj_ataltYC6fK18TJRU6-xCflh0",
    authDomain: "employeefirebase.firebaseapp.com",
    databaseURL: "https://employeefirebase.firebaseio.com",
    storageBucket: "employeefirebase.appspot.com"
};

firebase.initializeApp(config);

var database = firebase.database();

<<<<<<< HEAD
=======
var employeeList = database.ref("employeeData");
<<<<<<< HEAD
=======
var addEmployee = employeeList.push();
>>>>>>> b8081116b549a50732532f74f533a5cc18574b76
>>>>>>> 62c69011f3ea50d233482cc45cc64a4d3aa45255
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
		rate: rate
	});

	// Return False to allow "enter"
	return false;
});
//on submit click, update DB with form data
