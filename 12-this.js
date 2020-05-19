console.log(this)

function whatIsThis() {
  console.log(this)
}

whatIsThis()

const person = {
  name: 'Seher',
  greet: function() { console.log('Hi, ' + this.name) }
}

person.greet()

const friend = {
  name: 'Alice',
}

friend.greet = person.greet

friend.greet()

const greetPerson = person.greet

greetPerson()

this.name = 'Mia'

greetPerson()

const reallyGreetPerson = person.greet.bind(person)
reallyGreetPerson()

person.greet.call({name: 'Safin'}) 
person.greet.apply({name: 'Joita'}) 

const newPerson = {
  name: 'Bob',
  // arrow notation binds `this` lexically
  greet: () => console.log('Hi, ' + this.name)
}

newPerson.greet()

newPerson.greet.call(person) 
