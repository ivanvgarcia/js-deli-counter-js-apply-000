const takeANumber = (line, customerName) => {

  // Add customer to array
  line.push(customerName);

  // Return the string with the customer name and the length of the array.
	return `Welcome, ${customerName}. You are number ${line.length} in line.`
}


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
}
