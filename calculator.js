window.addEventListener('load', addOnClick);

/*
* The function that's called when the window is loaded,
* and takes care of adding all the event listeners
*/
function addOnClick() {
  var inputs = document.getElementsByTagName('input');

  for (var i = 0; i < inputs.length; i++) {
    // console.log(inputs[i]);
    inputs[i].addEventListener('click', userClick);
  }
};

/*
*This function catches the event when user clicks on a button.
*If the clicked button is different from equals and clear,
*then it will update the display adding the new event value.
*If the clicked button is equals,
*then it will evaluate the math expression of the display and update it with the result.
*If the clicked button is clear,
*then it will empty the display.
*/
function userClick(event) {
  var displayValue = document.getElementById('display').value;
  var eventValue = event.target.attributes.value.nodeValue;
  console.log(displayValue);
  console.log(eventValue);

  if ((eventValue != '=') && (eventValue != 'c')) {
    displayValue = displayValue + eventValue;
    document.getElementById('display').value = displayValue;

  } else if (eventValue === '=') {
    var result = eval(displayValue);
    console.log(result);
    document.getElementById('display').value = result;

  } else if (eventValue === 'c') {
    document.getElementById('display').value = '';

  }
};
