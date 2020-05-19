function makeHelloFunction() {
  var message = 'Hello!'
  
  function sayHello() {
    console.log(message)
  }
  
  return sayHello
}

const sayHello = makeHelloFunction()

console.log('typeof message:', typeof massage)
console.log(sayHello.toString())

sayHello()

