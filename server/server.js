var express = require('express');
var app = express();
var path = require('path');
var port = 7000;
var bodyParser = require('body-parser');

var valuesArray = [];
var math = '';
var result = '';

app.use(bodyParser.urlencoded({extended: true}));

app.post("/math", function (req, res){
  math = req.body;
  console.log('received math type', math.mathType);
  // Checking to see what our max number is ... Its a string... Which doesnt work in our function
  console.log(typeof math.mathType);
  // since we have to respond this is our response message
  res.send({message: 'Math type now stored on server'});
 console.log(math);
});

app.post("/numbers", function (req, res) {
  //Receiving our valuesArray from the client.js
  valuesArray = req.body;
  console.log('received valuesArray', valuesArray.values);
  // // run mathResults (this is currently not working!!!!)
  mathResults();
  console.log(result);
  console.log(resultArray);
  res.send({values : resultArray});
});


// Catch all
app.get('/*', function(req, res){
  // http://localhost:5002/scripts/client.js
  // scripts/client.js === req.params[0];
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, '/public/', file));
});

app.listen(port, function(){
  console.log('Server running on port', port);
});


// function
// a function to do math based on valuesArray & mathType variable
function mathResults() {
    if (math.mathType == "add")
    {result = (Number(valuesArray.values[0])) + (Number(valuesArray.values[1]));
    }
    else if (math.mathType == "subtract")
    {result = (Number(valuesArray.values[0])) - (Number(valuesArray.values[1]));
    }
    else if (math.mathType == "multiply")
    {result = (Number(valuesArray.values[0])) * (Number(valuesArray.values[1]));
    }
    else if (math.mathType == "divide")
    {result = (Number(valuesArray.values[0])) / (Number(valuesArray.values[1]));
    }
    resultArray = {result:[result]};
  }
