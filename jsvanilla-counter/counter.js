
//Function that saves counter data to browser's localStorage, which helps to remember this data
const count = () => {
  let countData = localStorage.getItem("counter")
  if(!countData) {
    localStorage.setItem("counter", 0)
    return 0;
  } else {
    let newCount = parseInt(countData)+1;
    localStorage.setItem("counter", newCount)
    return newCount;
  }
}

//This function can be called to reset counter data saved
const reset = () => {
  localStorage.removeItem("counter")
}

reset()
console.log(count())
console.log(count())
console.log(count())
console.log(count())
console.log(count())