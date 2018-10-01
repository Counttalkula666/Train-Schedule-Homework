

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

  var database = firebase.database();

// 2. Create button for adding new trains - then update the html + update the database
$("#add-train-btn").on("click", function(event) {
  // console.log(event);
  // event.preventDefault();
   console.log('Hi I work')
 
  // Grabs user input
   var trainName = $("#Train-name-input").val();
   var destination = $("#destination").val();
   var firstTrainTime = $("#firstTrainTime").val();
   var frequency = $("#frequency").val(); //moment.js?

  // Creates local "temporary" object for holding train data
   var newTrain = {
     "trainName": trainName,
     "destination": destination,
     "firstTrainTime": firstTrainTime,
     "frequency": frequency,
   };

  // Uploads train data to the database
 

 // Logs everything to console
 console.log(newTrain);
  database.ref('/').push(newTrain);
 // Alert

   // Clears all of the text-boxes
  $("#Train-name").val("");
  $("#destination").val("");
  $("#firstTrainTime").val("");
  $("#frequency").val("");
   // Determine when the next train arrives.
  
});

//Create Firebase event for adding train to the database and a row in the html when a user adds an entry
 database.ref('/').on("child_added", function(childSnapshot) {
   console.error('snapShot', childSnapshot.val());
// Store everything into a variable.
   var trainName = childSnapshot.val().trainName;
   var destination = childSnapshot.val().destination;
   var firstTrainTime = childSnapshot.val().firstTrainTime;
   var frequency = childSnapshot.val().frequency;
   console.log(moment()._d);
   var currentMoment = moment()._d.toString();
   var indexOfColon = currentMoment.indexOf(':');
   var time = currentMoment.slice(indexOfColon - 2, indexOfColon + 3);
   console.log(time);
   //This is not saved in the database and will need to be calculated
   //var minutesAway = childSnapshot.val().minaway;
 
// 4. Create a way to calculate the train times, then use moment.js formatting  
// Calculate the next arrival  using moment.js
// Do I need moment.js for minutes away?

// Create the new row
  var newRow = "<tr><td>" + trainName + "</td>" + "<td>" + destination + "</td>"
  + "<td>" + firstTrainTime + "</td>" + "<td>" + frequency + "</td></tr>";
 // 3. Create a way to retrieve trains from the train database.
 // Append the new row to the table
  $("table").append(newRow);
  });


