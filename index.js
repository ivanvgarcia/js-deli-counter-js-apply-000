const takeANumber = (line, customerName) => {
<<<<<<< HEAD
  // Add customer to array
  line.push(customerName);
=======

  // Add customer to array
  line.push(customerName);

>>>>>>> 2d73a7f45065e12cdcc833da78ea3b108a310989
  // Return the string with the customer name and the length of the array.
	return `Welcome, ${customerName}. You are number ${line.length} in line.`
}

<<<<<<< HEAD
const nowServing = (line) => {
  // Save the customer to a variable.
  const nowServing = line[0];
  // Remove the customer from the beginning of the array.
  line.shift()
  // Return the sentences.
  return (line.length > 0 ? `Currently serving ${nowServing}.` : 'There is nobody waiting to be served!')
}

const currentLine = (line) => {
  return (line.length > 0 ? `The line is currently: ${line.map((customer, i) => {
     return i + 1 === 1 ? `${i + 1}. ${customer}` : ` ${i + 1}. ${customer}`
  })}` : 'The line is currently empty.')
=======

const nowServing = (line) => {
  if (line.length > 0) {
    return `Currently serving ${line[0]}.`;
    line.shift();
  } else {
    return 'There is nobody waiting to be served!'
  }
}

const currentLine = (line) => {
  if (line.length > 0) {
    return `The line is currently: ${line.map((customer, i) => {
       return `${i + 1}. ${customer}`;
    })}, `
  } else {
    return 'The line is currently empty.'
  }
>>>>>>> 2d73a7f45065e12cdcc833da78ea3b108a310989
}
