/*
Welcome to redacted.js
*/

/* Global variables */
var limeGreen = "#32CD32";

/* Clearing all timeout timers */
function clearAllTimeouts() {
  
  /* Getting new max timeout timer ID */
  var id = window.setTimeout(function() {}, 0);
  
  /* Going down through the timeout timers and clearing them */
  while (id--) {
    window.clearTimeout(id);
  } 
}

/* Generating a random letter */
function randomLetters(minLength, maxLength, propercase) {
  
  /* Resulting string of letters */
  var letters = "";
  
  /* List of possible letters */
  var possibleLetters = "abcdefghijklmnopqrstuvwxyz";
  
  /* Determining length of string */
  var length = minLength+Math.floor(Math.random()*(maxLength-minLength+1));
  
  /* Generating random letters */
  for (var i = 0; i < length; i++) {
    
    /* Generating random letter */
    var letter = possibleLetters.charAt(Math.floor(Math.random() * possibleLetters.length));
    
    /* Setting Propercase if specified */
    if (propercase && i === 0) {
      letter = letter.toUpperCase();
    }
    
    /* Adding letter to string of letters */
    letters += letter;
    
  }
  
  /* Returning a random letter */
  return letters;
  
}


/* Function to execute list of function with individual delays after each other */
function executeWithDelays(functionList) {
  
  /* Using a total delay, increased for each function in list by the specified ms */
  var totalDelay = 0;
  
  /* Going through list of functions */
  functionList.forEach(function(x) {
    
    /* Adding current delay to total delay */
    totalDelay += x.delay;
    
    /* Starting timer for total delay */
    setTimeout(function() {
      x.func();
    }, totalDelay); 
    
  });
}

/* ??? */
function showText (message, interval, index) { 
  if(!index) index = 0;  
  if (index < message.length) {
    if (index === 0) $("#console").append("<p>");
    $("#console").append(message[index++]);
    setTimeout(function () { showText(message, interval, index); }, interval);
    if (index === message.length) $("#console").append("</p>");
  } 
}

/* Initializing stuff */
$(document).ready(function() {
  
  var functionList = [];
    
  functionList.push({
    func: function() { showText("Welcome to Redacted Work.",15); },
    delay: 500
  },{
    func: function() { showText("Nothing is here yet - but one day there will be.",15); },
    delay: 1100
  });  
  
  executeWithDelays(functionList);
  
  $("#input").focus();
  
  $("body").click(function() {
    $("#input").focus();
    
    $("#input").keyup(function(event){
      if(event.keyCode == 13){
        showText("Unknown command: " + this.value,0);
        this.value = "";
      }
    });
    
  });
  
});


