/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  if (timeString < '12:00') {
    return "Good Morning"
  } else if (timeString > '17:00') {
    return "Good Evening"
  } else {
    return "Good Afternoon"
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(string) {
  const greeting = document.querySelector('#greeting')
  greeting.textContent = string
}
