<script src="https://www.gstatic.com/firebasejs/5.1.0/firebase.js"></script>
 
    <script>
    //Initialize Firebase
      var config = {
        apiKey: "AIzaSyD3VNaNKS_Xv4EZG8D2CFxOqIuNczuVzkA",
        authDomain: "train-time-9d9a3.firebaseapp.com",
        databaseURL: "https://train-time-9d9a3.firebaseio.com",
        projectId: "train-time-9d9a3",
        storageBucket: "train-time-9d9a3.appspot.com",
        messagingSenderId: "573530013083"
      };
     
      firebase.initializeApp(config);

//Reference the database 
      var database = firebase.database();

//Create function that prevents default behavior in the case of an error and that listens for click event
      $("#added-employee-btn").on("click", function(event) {
        event.preventDefault
      }

//List of values from each entry 
      var trainName = $("#train-name-input").val().trim()
      var destination = $("#destination-input").val().trim()
      var initialArrivalTime = $("#initial-arrival-time-input").val().trim()
      var frequency = $("#train-name-input").val().trim()

//Need an object that will store the inut data above
      var trainAddition = {
        train: trainName,
        destination: destination,
        arrival: initialArrivalTime,
        frequency: frequency,
      };

//Next, because we want to create a collection, we use push to push the added train object to the database.
      database.ref().push(trainAddition);


//Use alert to notify of  successful upload
      alert(Train submission successfully added.)

//Create a firebase event that will add our object then pull each child value 
//Side note: Example uses initial variable names instead of assigned names ------------>??

      var trainName = childSnapshot.val().train;
      var destination = childSnapshot.val().destination
      var initialArrivalTime = childSnapshot.val().arrival
      var frequency = childSnapshot.val().frequency



//Create new variable to format time related input by
      var formattedArrivalTime = moment.unix(arrival).format("HH:mm");

//Calculate the amount of time (in minutes), until the next arrival
//using the initial arrival time and the frequency in minutes to increment out the arrival time until
//you get one that is beyond the current time. 
      var nextArrival = moment().diff(moment(initialArrival, "X"), "minutes");

//Calculate the minutes away by subtracting the current time (using moment), from the next arrival time just calculated.
      var minutesAway = 


//Now that the information is formatted, append data to the table > Train Name, Destination, Arrival Frequency, Next Arrival, Minutes Away
$("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + initialArrivalTime + "</td><td>" 
  + frequency + "</td><td>"nextArrival + "</td><td>" minutesAway + "</td><td>")
    

    </script>




