const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
}

store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))

// --------------------

module.exports = {
  get() {
    const cats = pets.cats.all()
    const dogs = pets.dogs.all()
    return {
      cats,
      dogs
    }
  },

  dequeue(type) {
    if (!type) {
      return new Error('Type is required')
    }
    pets[type].dequeue()
  }
}
