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
function randomLetters(minLength, maxLength, propercase)
{
  
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


/* All the basic bindings to add */
function addBindings() {
  
  /* Making a binding for key presses */
  $(document).keypress(function(event) {
    
    /* Preventing page from scrolling when hitting space bar */
    event.preventDefault();
    
    switch (event.keyCode) {
      case 8:  /* Backspace */
        
        break;
        
      case 9:  /* Tab */
      case 13: /* Enter */
      case 37: /* Left */
      case 38: /* Up */
      case 39: /* Right */
      case 40: /* Down */
        break;
        
      default:
        var char = String.fromCharCode(event.keyCode);
        $("#console").append(char);
        break;
    }
  });
}

/* Initiation stuff on page load */
function init(){
  
  /* Adding list of chapters to page */
  listChapters();
  
  /* Adding bindings */
  addBindings();
  
  /* Start the foreword */
  foreword();
  
}

/*  */
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
  //init();
  
  var functionList = [];
    
  functionList.push({
    func: function() { showText("Wel",10); },
    delay: 500
  },{
    func: function() { showText("Hello there, you. I am here to say...",10); },
    delay: 1000
  });  
  
  executeWithDelays(functionList);
  
  $("#input").focus();
  
  $("body").click(function() {
    $("#input").focus();
    
    $("#input").keyup(function(event){
      if(event.keyCode == 13){
        showText(this.value,0);
        this.value = "";
      }
    });
    
});
  
  //addBindings();
  
});


