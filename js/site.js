//Getting the numebrs from the page, validate the niputs we collected, then pas the vales t the pther fucntions
const getValues = () => {
  let fizzVal = document.getElementById('fizz-value').value;
  let buzzVal = document.getElementById('buzz-value').value;
  let stopVal = document.getElementById('stop-value').value;

  let convertFizzValToNum = Number(fizzVal);
  let convertBuzzValToNum = Number(buzzVal);
  let convertStopValToNum = Number(stopVal);

  //if
  if (convertFizzValToNum != 3 || convertBuzzValToNum != 5 ||
    isNaN(convertFizzValToNum) || isNaN(convertBuzzValToNum)) {

    Swal.fire({
      title: 'Oops!',
      text: 'Fizz can only be 3. Buzz can only be 5. Try your inputs again.',
      icon: 'error',
      backdrop: false
    });
  }
  else if (convertStopValToNum > 5000) {
    Swal.fire({
      title: 'Oops!',
      text: 'The stop value cannot be greater than 5000',
      icon: 'error',
      backdrop: false
    });
  }
  else if (convertFizzValToNum < 1) {
    Swal.fire({
      title: 'Oops!',
      text: 'The fizz value cannot be less than 1',
      icon: 'error',
      backdrop: false
    });
  }



  let passFizzBuzzCollection = generateFizzBuzz(convertFizzValToNum, convertBuzzValToNum, convertStopValToNum);

  displayFizzBuzz(passFizzBuzzCollection, convertStopValToNum);


}

//create an array of values accordng to FizBuzz rules e.g. [1,2,'Fizz', 4, 'Buzz']

const generateFizzBuzz = (convertFizzValToNum, convertBuzzValToNum, convertStopValToNum) => {
  let fizzBuzzNumbers = [];

  for (let i = 1; i <= convertStopValToNum; i++) {

    if (i % convertFizzValToNum === 0 && i % convertBuzzValToNum === 0) {
      fizzBuzzNumbers.push("FizzBuzz")
    } else if (i % convertBuzzValToNum === 0) {
      fizzBuzzNumbers.push("Buzz")
    }
    else if (i % convertFizzValToNum === 0) {
      fizzBuzzNumbers.push("Fizz")
    }
    else {
      fizzBuzzNumbers.push(i)
    }
  }

  return fizzBuzzNumbers;

}

//Takwe in an array of vlaues, and siaply them on the page
const displayFizzBuzz = (passFizzBuzzCollection) => {
  let tableHtml = '';

  for (let i = 0; i < passFizzBuzzCollection.length; i++) {
    let currentNumber = passFizzBuzzCollection[i];
    let className = '';
    //could also make classes for fizzbuzz uppercase and apply directly from the array 
    //since the array holds fizz buzz
    if (currentNumber === "Fizz") {
      className = "fizz text-light";
    }
    else if (currentNumber === "Buzz") {
      className = "buzz text-light";
    }
    else if (currentNumber === "FizzBuzz") {
      className = "fizzbuzz text-light";
    }
    else {
      className = ""
    }
    let htmlCol = `<div class="col ${className} border border-2">  ${currentNumber}</div>`
    //let tableRowHtml = `<tr><td class="${className}"> ${currentNumber} </td></tr>`

    tableHtml += htmlCol;
  }

  document.getElementById("results").innerHTML = tableHtml

}

const clearDisplay = () => {
  document.getElementById("results").innerHTML = " ";
}