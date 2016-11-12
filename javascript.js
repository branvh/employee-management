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
	// console.log(childSnapshot.val().name);
	// console.log(childSnapshot.val().role);
	// console.log(childSnapshot.val().startDate);
	// console.log(childSnapshot.val().rate);

	var newStartDate = moment(new Date(childSnapshot.val().startDate));
	var monthsWorking = -1 * moment(newStartDate).diff(moment(), "months");
    var totalBilled = monthsWorking * parseInt(childSnapshot.val().rate);

	$('tbody').append('<tr><td>' + childSnapshot.val().name + '</td><td>' + childSnapshot.val().role +'</td><td>' + childSnapshot.val().startDate + '</td><td>' + monthsWorking + '</td><td>' + childSnapshot.val().rate + '</td><td>' + totalBilled + '</td></tr>')
	// console.log(childSnapshot.val().startDate.getMonth());

})
