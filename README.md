# Calculator, advanced version
This mini project is a web based calculator, that fully separates the HTML, CSS and JavaScript.
All the event listeners are added (on window load) from the JavaScript.

## Main functions
- **addOnClick():** The function that's called when the window is loaded, and takes care of adding all the event listeners.
- **userClick(event):** This function catches the event when user clicks on a button. If the clicked button is different from equals and clear, then it will update the display adding the new event value. If the clicked button is equals, then it will evaluate the math expression of the display and update it with the result. If the clicked button is clear, then it will empty the display.
