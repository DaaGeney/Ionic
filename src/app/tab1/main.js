// Initialize Firebase
var config = {
    apiKey: "AIzaSyAP3-j4tmrOIhShEbyW8WcLUjpxLolHEk8",
    authDomain: "crud-7549c.firebaseapp.com",
    databaseURL: "https://crud-7549c.firebaseio.com",
    projectId: "crud-7549c",
    storageBucket: "crud-7549c.appspot.com",
    messagingSenderId: "884731356746"
  };
  firebase.initializeApp(config);

var dates = [
    {name, age, email}
]

function addDates(){
    console.log('estoy en addDates')

    var name_var = document.getElementById('name').value
    var age_var = document.getElementById('age').value;
    var email_var = document.getElementById('email').value;

    var objecDate = {}
    objecDate.name = name_var
    objecDate.age = age_var
    objecDate.email = email_var

    dates.push(objecDate)

    console.log(dates)
}

addDates()
