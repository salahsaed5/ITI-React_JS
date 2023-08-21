document.addEventListener("keydown", function(event) {
    var keyCode = event.keyCode || event.which;
  
  
    var isAltPressed = event.altKey;
    var isCtrlPressed = event.ctrlKey;
    var isShiftPressed = event.shiftKey;
  
    var message =  " ASCII code: " + keyCode;
  
    if (isAltPressed) {
      message += " (Alt key)";
    }
    if (isCtrlPressed) {
      message += " (Ctrl key)";
    }
    if (isShiftPressed) {
      message += " (Shift key)";
    }
  
  
    alert(message);
  });
  