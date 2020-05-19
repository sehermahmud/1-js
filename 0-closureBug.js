function makeFunctionArray() {
  const arr = []
  
  for (let i = 0; i < 5; i++) {
    arr.push(function () { console.log(i) })
  }
  
  return arr  
}

const functionArr = makeFunctionArray()

functionArr [0]() 
