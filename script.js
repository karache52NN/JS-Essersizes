window.onload = function() {
  var count = 0;
  var message = "You clicked me ";
  var div = document.getElementById("message");
  var button = document.getElementById("clickme");
  button.onclick = function() {
    var message = "You clicked me ";
    var div = document.getElementById("message");
    count++;
    div.innerHTML = message + count + " times!";
  };
}
