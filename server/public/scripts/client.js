var values = [];

$(document).ready(function(){
  console.log('client.js sourced');

  $('#calculatorResults').hide();

  // take user radio selection with click listener and pass to server
  $('#mathResults').on('click', function(){


    // selecting math type from setup and setting as var
    mathType = $('input:radio[name=math]:checked').val();
    var selection = $('radio').val();
    console.log('submit button clicked');
    values = [];
    var mathX = $('#x').val();
    var mathY = $('#y').val();
    values.push(mathX, mathY);
    console.log(values);


    $.ajax({
      type: 'POST',
      url: '/math',   // address route for getting/putting data from server
      data: {mathType: mathType},

      success: function(response) {
        console.log("request received");
        console.log(response);
        // connect up button
      }
    });

    $.ajax({
      //Sending x & y values to the server.
      type: 'POST',
      url: '/numbers',
      data: {values: values},
      success: function(response) {
        console.log("x & y sent");
        console.log(response.result);
      }
    });

  });
});
