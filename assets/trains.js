
  // Initialize Firebase
    var config = {
    apiKey: "AIzaSyCLK5_P_rlxQkgKhqCl3MhaZ178mWHGAzg",
    authDomain: "train-schedule-hw-d1221.firebaseapp.com",
    databaseURL: "https://train-schedule-hw-d1221.firebaseio.com",
    projectId: "train-schedule-hw-d1221",
    storageBucket: "train-schedule-hw-d1221.appspot.com",
    messagingSenderId: "1036033962950"
  };
  firebase.initializeApp(config);
// 5. Calculate minutes away

  var database = firebase.database();
// 2. Create button for adding new trains - then update the html + update the database
$("#add-train-btn").on("click", function(event) {
  // console.log(event);
  // event.preventDefault();
  // console.log('Hi I work')
 
  // Grabs user input
   var trainName = $("#train-name-input").val().trim();
   var destination = $("#destination-input").val().trim();
   var frequency = $("#frequency-input").val().trim(),
   var nextArrival = $("#arrival-input").val().trim();   //is this var redundant with the following one? moment.js?
   var minutesAway = $("#minutes-away-input");  //moment.js?
  // Creates local "temporary" object for holding train data
   var newTrain = {
     trainName: trainName,
     destination: destination,
     frequency: frequency,
     nextArrival: nextArrival,
     minutesAway: minutesAway
   };

  // Uploads train data to the database
   database.ref().push(newTrain);

 // Logs everything to console
 console.log(newTrain.name);
 console.log(newTrain.destination);
 console.log(newTrain.firstTrain);
 console.log(newTrain.frequency);

 // Alert
 alert("Train successfully added");

   // Clears all of the text-boxes
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#frequency-input").val("");
  $("#nextArrival-input").val("");
  $("minutesAway-input").val("");
   // Determine when the next train arrives.
   return false;
});

//Create Firebase event for adding train to the database and a row in the html when a user adds an entry
 database.ref().on("child_added", function(childSnapshot) {
 console.log(childSnapshot.val());

// Store everything into a variable.
   var trainName = childSnapshot.val().name;
   var destination = childSnapshot.val().dest;
   var frequency = childSnapshot.val().freq;
   var nextArrival = childSnapshot.val().arrv;
   var minutesAway = chilSnapShot.val().minaway;
 }
// 4. Create a way to calculate the train times, then use moment.js formatting  
// Calculate the next arrival  using moment.js
// Do I need moment.js for minutes away?

// Create the new row
  // var newRow = $("<tr>").append(
  //   $("<td>").text(),
  //   $("<td>").text(),
  //   $("<td>").text(),
  //   $("<td>").text(),
  //   $("<td>").text()
  // );
 // 3. Create a way to retrieve trains from the train database.
 // Append the new row to the table
  $("#train-table > tbody").append(newRow);
  });


